require('tingodb');

module.exports = function (RED) {
    function TingoDBFindNode(config) {
        RED.nodes.createNode(this, config);
        var node = this;

        node.on('input', function (msg) {
            var db = RED.nodes.getNode(config.db).getDB();
            db.collection(config.collection).findOne(msg.payload).toArray(function (err, docs) {
                //TODO add error too. :\
                msg.payload = docs;
                node.send(msg);
            });
        });
    }
    RED.nodes.registerType("tingodb-findOne", TingoDBfindOneNode);
}
