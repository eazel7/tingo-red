# TingoDB nodes for NodeRED

> Watch https://www.youtube.com/watch?v=Ice3myP99VI for a 2-minutes demo

## DB configuration node

All other nodes depend on this one, it requires a TingoDB database path. Collection name is a per-node property.

## Insert node

Inserts the `msg.payload` as document into a collection.

## Find node

Looks for documents into a collection using `msg.payload` as predicate.

## Update node

Updates a collection's documents. `msg.predicate` will be the filter and `msg.update` the update operation itself. `db.collection(collectionName).update(...)` is invoked using `{multi: true}`.

## Remove

Removes documents from a collection. `msg.payload` will be the filter`msg.update` the update operation itself. `db.collection(collectionName).remove` is invoked using `{multi: true}`.
