conn = new Mongo()

db = conn.getDB("...");
recordset = db.getCollection("Cinema").find({"nom" : 1});

while ( recordset.hasNext() ) {
film = recordset.next() ;
print("- ", film);
}