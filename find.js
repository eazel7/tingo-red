require('tingodb');

module.exports = function (RED) {
    function TingoDBFindNode(config) {
        RED.nodes.createNode(this, config);
        var node = this;

        node.on('input', function (msg) {
            let db = RED.nodes.getNode(config.db).getDB();

            let cursor = db.collection(config.collection).find(msg.payload);
            if (msg.sort) {
                cursor.sort(msg.sort);
            }
            if (msg.limit) {
                cursor.limit(msg.limit);
            }
            if (msg.skip) {            
                cursor.skip(msg.skip);
            }
            cursor.toArray(function (err, docs) {
                    msg.payload = docs;
                    node.send(msg);
            });
        });
    }
    RED.nodes.registerType("tingodb-find", TingoDBFindNode);
}
