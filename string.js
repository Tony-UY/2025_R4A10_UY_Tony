const email = "test.test@email.com";


module.exports = {
    // 1) Séparer l'email en deux parties au niveau du caractère '@', renvoyer le tableau correspondant
    Q1() {
        let tab = email.split("@");
        return tab;
    },

    // 2) Vérifier qu'il n'y a qu'un seul caractère '@' dans email. Renvoyer un booléen
    Q2() {
        let cpt = 0;
        for (let i =0;i<email.length;i++){
            if(email[i]=== "@"){
                cpt+=1;
            }
        }
        return cpt===1 ? true : false;
    },

    // 3) Renvoyer l'index du caractère '@'
    Q3() {
        return email.indexOf("@");
    },

    // 4) Renvoyer la sous-chaîne se situant après le caractère '@'
    Q4() {
        return email.slice(email.indexOf("@")+1,email.length);
    },

    // 5) Renvoyer la variable en majuscule
    Q5() {
        let majVar = email.toUpperCase();
        return majVar;
    },

    // 6) Renvoyer le type de la variable email
    Q6() {
        return typeof email;
    },

    // 7) Changez email.com par gmail.com, renvoyez la chaine modifiée
    Q7() {
        let mailCorrige;
        mailCorrige = email.replace("email.com","gmail.com");
        return mailCorrige;
    }
};