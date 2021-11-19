# TingoDB nodes for NodeRED

> Watch https://www.youtube.com/watch?v=Ice3myP99VI for a 2-minutes demo

## DB configuration node

All other nodes depend on this one, it requires a TingoDB database path. Collection name is a per-node property.

> Database path must be a folder, TingoDB uses a file to save each collection

## Insert node

Inserts the `msg.payload` as document into a collection.

## Find node

Looks for documents into a collection using `msg.payload` as predicate.

`msg.sort` (optional) to set sorting

`msg.project` (optional) to define the returned fields

`msg.limit` (optional) to define the maximum number of returned results (for paging)

`msg.skip` (optional) to define the number of results to skip (for paging)

## Update node

Updates a collection's documents. `msg.predicate` will be the filter and `msg.update` the update operation itself. `db.collection(collectionName).update(...)` is invoked using `{multi: true}`.

## Remove

Removes documents from a collection. `msg.payload` will be the filter`msg.update` the update operation itself. `db.collection(collectionName).remove` is invoked using `{multi: true}`.
