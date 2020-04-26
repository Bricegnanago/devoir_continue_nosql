# Reponse aux questions


## Question 1
    
## Question 2
db.Cinema.find({"annee":1990})

## Question 3
db.Cinema.find({"annee":{$lt:2000}})

## Question 4
db.Cinema.find({"realisateur":{"nom":"Eastwood", "prenom":"Clint"}})

## Question 5
db.Cinema.find({"realisateur.prenom":"Clint"})

## Question 6
db.Cinema.find({"realisateur.prenom":"Clint", "annee":{$lt:2000}})

## Question 7
db.Cinema.find({"acteurs":{nom:"Eastwood", prenom:"Clint"}})

## Question 8
db.Cinema.find({"acteurs":{$elemMatch:{"nom":"Eastwood"}}})

## Question 9
db.Cinema.find({"acteurs":{$elemMatch:{"nom":"Eastwood"}}},{"nom":1,"_id":0})

## Question 10
'''
    conn = new Mongo();

    db = conn.getDB("db1");

    recordset = db.Cinema.find({"acteurs":{$elemMatch:{"nom":"Eastwood"}}},{"nom":1,"_id":0})

    while ( recordset.hasNext() ) {

    film = recordset.next() ;

    print("- ", film.nom);	

    }
'''

## Question 11
db.User.insert({
        pseudonyme : "Hico",
        preferences : [
            { cinema_id : "5e9c8debc3129268082dcb17", etoiles : 2 },
            
            { cinema_id : "5e9c8debc3129268082dcb18", etoiles : 3 }
        ],        
    },
)

db.User.insert(
    {
        pseudonyme : "Bilingo",
        preferences : [
            { cinema_id : "5e9c8debc3129268082dcb16", etoiles : 3 },
            
            { cinema_id : "5e9c8debc3129268082dcb17", etoiles : 1 }
        ]
})

db.User.insert(
    {
        pseudonyme : "Bafana",
        preferences : [
            { cinema_id : "5e9c8debc3129268082dcb19", etoiles : 2 },
            
            { cinema_id : "5e9c8debc3129268082dcb1b", etoiles : 2 }
        ]
    }
    
)

## Question 12

**Les identifiants sont contrôlés par le système, ils sont généré au cours d'une insertion, mais s'il arrive qu'on change de base**
 **de données les identifiants seront différents.**

## Question 13
db.User.find({"preferences":{$elemMatch:{"etoiles":3}}})

## Question 14
db.User.find({"preferences":{$elemMatch:{"etoiles":3}}}, {"_id":0, "preferences.cinema_id":1})

## Question 15
Comme Mongo ne gère pas de jointure, on va devoir la réaliser au niveau de la couche cliente applicative.

    Interroger MongoDb avec la requête précédente

    Récupérer et dédoublonner la liste des identifiants de films

    Boucler sur ces identifiants, créer une requête pour chaque identifiant et interroger MongoDB

    Par exemple : db.Cinema.find({"_id":ObjectId("574ddaa372ace929efdaa46f")})  
    
## Question 16

conn = new Mongo();

<!-- connexion à la base de données -->
db = conn.getDB("mydb"); 

<!-- Recupération de tous les données de la collection film respectant ce critère -->
films = db.User.distinct("preferences.film", {"preferences":{$elemMatch:{"etoiles":3}}});

<!-- On parcours les données jusqu'au trouver l'id correspondant puis on affiche le nom du film  -->
for (var i=0; i<films.length; i++) {

	var id = films[i];		

	if (film = db.Cinema.findOne(ObjectId(id)))

		print(film.nom);

}