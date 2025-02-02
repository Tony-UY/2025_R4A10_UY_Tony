const email = "test.test@email.com";

// Toutes les questions nécessitent d'aller récupérer l'objet depuis cette fonction
function getObject() {
    return {
        name: "Mon objet",
        description: "Un très bel objet JS",
        value: 7,
        isBestObject: false,
        address: {
            city: "Paris",
            zipCode: 75000,
        },
    };
}

module.exports = {
    // 1) Renvoyer la propriété description
    Q1() {
        return getObject().description;
    },

    // 2) Renvoyer la propriété city
    Q2() {
        return getObject().address.city;
    },

    // 3) Renvoyer les clés de l'objet sous forme de tableau
    Q3() {
        let tableau = [];
        for (const cle in getObject()){
            tableau.push(cle);
        }
        return tableau;
    },

    // 4) --- Supprimée ---

    // 5) Ajouter la propriété email à myObject et renvoyer l'objet modifié
    Q5() {
        let object = getObject();
        object.email = email;
        return object;
    },

    // 6) Ajouter une propriété dynamique étant le résultat de la concaténation des chaines hello et world et dont la valeur est true
    // renvoyer l'objet modifié
    Q6() {
        let object2 = getObject();
        let hello = "Hello";
        let world = "World";
        let concatenation = hello.concat("",world);
        object2[concatenation] = true;
        return object2;
    },

    // 7) Supprimer la propriété isBestObject et renvoyer l'objet
    Q7() {
        let object3 = getObject();
        delete object3.isBestObject;
        return object3;
    },

    // 8) Vérifier que la propriété description existe dans l'objet, renvoyer un booléen
    Q8() {
        if ("description" in getObject()){
            return true;
        }

    },
};