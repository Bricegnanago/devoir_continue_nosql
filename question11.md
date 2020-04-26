# afficher tous les identifiants des films

# Choisir parmi eux un à deux identifiant et les affecter à chaque chacun des
# des trois utilisateurs

> exemple 1:

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
