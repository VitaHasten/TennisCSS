function buttonOne(){
  myFunction("one");
}
function buttonTwo(){
  myFunction("two");
}


function myFunction(buttonName) 
{
  if(buttonName == "one")
    {
      var dots = document.getElementById("dots1");
      var moreText = document.getElementById("more1");
      var btnText = document.getElementById("myBtn1");
    }
    else
    {
      var dots = document.getElementById("dots2");
      var moreText = document.getElementById("more2");
      var btnText = document.getElementById("myBtn2");
    }
  
  if (dots.style.display === "none") 
    {
      dots.style.display = "inline";
      btnText.innerHTML = "Läs mer";
      moreText.style.display = "none";
    } 
    else 
    {
      dots.style.display = "none";
      btnText.innerHTML = "Förminska";
      moreText.style.display = "inline";
    }
}

const button = document.getElementById("my-button");
const nav = document.getElementById("mynav");

button.addEventListener('click', () => {
nav.classList.toggle('show');
});

function validateForm() {
  event.preventDefault();
  // let a = document.forms["formOne"]["fname"].value;
  
  // if (a == "") {
  //   alert("Förnamn saknas...");
  //   return false;
  // }

  // let b = document.forms["formOne"]["lname"].value;
  // if (b == "") {
  //   alert("Efternamn saknas...");
  //   return false;
  // }

  let c = document.forms["formOne"]["phone"].value;
  console.log(!c.length == 10);
  if (!(c.length == 10)) {
    Swal.fire({
      icon: 'error',
      title: 'Oj...',
      text: 'Det angivna telefonnumret innehåller inte 10 st siffror.',
      })
    return false;
  }

  else
  {
    openPopup();
    return true;
  }
}


function openPopup(){

let popup = document.getElementById("popup")

let namnTd=document.getElementById("fname").value+(" ")+document.getElementById("lname").value;
let sportTd=document.getElementById("sport1").value;
let speltidTd=document.getElementById("speltid").value;
let datumTd=document.getElementById("datum").value;
let tidTd=document.getElementById("tid").value;
let phoneTd=document.getElementById("phone").value;

popup.classList.add("open-popup")

const resultat = document.getElementById("resultat");
resultat.innerHTML="Namn: "+namnTd+"<br/>"+"Sport: "+sportTd+"<br/>"+"Spellängd: "+speltidTd+" h"+"<br/>"+"Datum: "+datumTd+"<br/>"+"Tid: "+tidTd+"<br/>"+"Mobilnummer: "+phoneTd+"<br/>";

}

function closePopup(){
  popup.classList.remove("open-popup")
}
  