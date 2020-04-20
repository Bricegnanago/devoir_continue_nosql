conn = new Mongo();
db = conn.getDB("myDatabase");

if(db)
    print('ok')
else{
    print('no')
}