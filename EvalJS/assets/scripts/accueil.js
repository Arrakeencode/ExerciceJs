class Vendeur{
    constructor(userName, email, categorie, numeroDeTelephone) {
        this.userName = userName;
        this.email = email;
        this.categorie = categorie;
        this.numeroDeTelephone = numeroDeTelephone;

        this.afficherVendeur = () => {
            document.getElementById('userName').innerHTML = this.userName;
            document.getElementById('email').innerHTML = this.email;
            document.getElementById('categorie').innerHTML = this.categorie;
            document.getElementById('tel').innerHTML = this.numeroDeTelephone;
        }
    }
}

class Article{
    constructor(articleName, description, prix, image){
        this.articleName = articleName;
        this.description = description;
        this.prix = prix;
        this.image = image;

        this.afficherArticle1 = () => {
            document.getElementById('articleName').innerHTML = this.articleName;
            document.getElementById('description').innerHTML = this.description;
            document.getElementById('prix').innerHTML = this.prix;
            document.getElementById('image').src = this.image;
        }
        this.afficherArticle2 = () => {
            document.getElementById('articleName2').innerHTML = this.articleName;
            document.getElementById('description2').innerHTML = this.description;
            document.getElementById('prix2').innerHTML = this.prix;
            document.getElementById('image2').src = this.image;
        }
    }
}

let vendeur = new Vendeur(sessionStorage.getItem('userName'),sessionStorage.getItem('email'),sessionStorage.getItem('categorie'),sessionStorage.getItem('tel'))
let article1 = new Article("Adidas", "chaussure light", "50$", "assets/img/chaussur1.jpg")
let article2 = new Article("Nike", "chaussure high", "70$", "assets/img/chaussur2.jpg")
console.log(vendeur);
vendeur.afficherVendeur();
article1.afficherArticle1();
article2.afficherArticle2();