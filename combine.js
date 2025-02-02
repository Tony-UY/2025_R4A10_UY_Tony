// Toutes les questions doivent faire appel à cette fonction
// Chaque question est indépendante, et se base sur ce tableau initial
function getEmployees() {
    return [
        { name: "Thomas", age: "30" },
        { name: "Theo", age: "25" },
        { name: "Philippe", age: "45" },
        { name: "Jeremy", age: "28" },
        { name: "Minnie", age: "50" },
    ];
}


module.exports = {
    // 1) Renvoyer un nouveau tableau qui ne garde que les personnes dont le nom se termine par un "e"
    B1() {
        let tab = [];
        for (let personne of getEmployees()) {
            if (personne.name.endsWith("e")) {
                tab.push(personne);
            }
        }
        return tab;
    },

    // 2) Trouver la première personne dont l'âge est inférieur à 30
    B2() {
        for (let person of getEmployees()){
            if (person.age <30){
                return person;
            }
        }
    },

    // 3) Renvoyer l'index où se trouve "Jeremy"
    B3() {
        for (let index = 0; index < getEmployees().length; index++) {
            if (getEmployees()[index].name === "Jeremy") {
                return index;
            }
        }

    },

    // 4) Trier le tableau par âge des personnes
    B4() {

        return getEmployees().sort((a, b) => a.age - b.age);
    },

    // 5) Ajouter Kasimu à la fin du tableau, il a 38 ans, et renvoyer le tableau modifié
    B5() {
        let tab = getEmployees();
        tab.push({ name: "Kasimu", age: "38" });
        return tab;
    },

    // 6) Renvoyer la longueur du tableau
    B6() {
        return getEmployees().length;
    },

    // 7) Remplacer le "o" de Theo par un "a", et renvoyer le tableau modifié

    B7() {
        const monTableau = getEmployees();
        for (let person of monTableau) {
            if (person.name === "Theo") {
                person.name = person.name.replace("o", "a");
            }
        }
        return monTableau;
    },

    // 8) Renvoyer un tableau qui ne contient que les personnes ayant au moins un "e" dans leur nom
    B8() {
        let tab = [];
        tab = getEmployees();
        for (let person in tab){
            if (tab[person].name.indexOf("e") === -1){
                tab.splice(person,1);
            }
        }
        return tab;

    },
};