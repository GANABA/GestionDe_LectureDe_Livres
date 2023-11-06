//recuperation de la balise 'ul' grace a son 'id' dans la variable 'alire'
let alire = document.getElementById("alire");
//recuperation de la balise 'ul' grace a son 'id' dans la variable 'lu'
let lu = document.getElementById("lu");

// recuperation de 'id' du boutton (balise 'button') et implementation de la fonction pour l'ajout automatique de nouveau livre
document.getElementById("ajouter").addEventListener("click",function(){

    //console.log("J'ai été clicker");

    //recuperation du titre et du lien du livre dans des variable a travers 'id' des balises 'input'
    let titre = document.getElementById("titre").value;
    let lien = document.getElementById("lien").value;
    //console.log(lien,titre);
    if(lien=="" || titre==""){
        alert("Les deux champs doivent être rempli")
    }else{
        //permet de controler la visibilite des elements en fonction de l'etat de la page
        document.getElementById("titre1").style.visibility="visible";
        document.getElementById("pretexte").style.visibility="hidden";
        //fonctionnalite js permettant d'ajouter des element html et dans un ordre sous forme de pile (plus ancien en bas-plus recent en haut)
        alire.insertAdjacentHTML("afterbegin",`<li>${titre} <img src="./images/done.png" id=${titre} onclick=marquerLu(this.id) alt="done"><img src="./images/delete.png" id=${titre} onclick=supprimer(this.id) alt="delete"><a href=${lien} target="blank"><img src="./images/shopping.png" alt="shopping"></a></li>`);
        //permet de liberer les champs de texte apres ajout d'un nouveau livre
        document.getElementById("lien").value=""
        document.getElementById("titre").value=""
    }
     
})

//fonction qui gere la suppression d'un livre
function supprimer(id){
    //console.log(id);
    document.getElementById(id).parentElement.outerHTML="";
}

//fonction qui gerer le status de "deja lu" d'un livre
function marquerLu(id){
    //console.log("ok");
    document.getElementById("titre2").style.visibility="visible";
    supprimer(id);
    lu.insertAdjacentHTML("afterbegin",`<li>${id}<img src="./images/delete.png" id=${id} onclick=supprimer(this.id) alt="delete"></li>`);
}