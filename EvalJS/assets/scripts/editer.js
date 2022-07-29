let formulaire = document.getElementById("formId");
let userName = document.getElementById("userName");
let email = document.getElementById("email");
let categorie = document.getElementById("categorie");
let tel = document.getElementById("tel");
let error = document.getElementById("error");
let regex = /^[a-zA-Z0-9(.)(_)(@)-]+$/;

formulaire.addEventListener('submit', function(e){
    if(userName.value.trim() == "" || email.value.trim() == "" || categorie.value.trim() == "" || tel.value.trim() == ""){      
        error.innerHTML = "<p>Veuillez remplir tout les champs</p>";
        error.style.color = "black";
        e.preventDefault();
    }
    else if(regex.test(userName.value) == false){    
        error.innerHTML = "<p>Le format saisie du nom n'est pas conforme</p>";
        error.style.color = "black";
        e.preventDefault();
    }
    else if(regex.test(categorie.value) == false){    
        error.innerHTML = "<p>Le format saisie de la catégorie n'est pas conforme</p>";
        error.style.color = "black";
        e.preventDefault();
    }
    else{
        sessionStorage.setItem('userName', userName.value);
        sessionStorage.setItem('email', email.value);
        sessionStorage.setItem('categorie', categorie.value);
        sessionStorage.setItem('tel', tel.value);
    }
});

let get = () => { 
    let userName = sessionStorage.getItem('userName');
    let email = sessionStorage.getItem('email');
    let categorie = sessionStorage.getItem('categorie');
    let tel = sessionStorage.getItem('tel');
    document.getElementById('userName').value = userName;
    document.getElementById('email').value = email;
    document.getElementById('categorie').value = categorie;
    document.getElementById('tel').value = tel;
}

get();