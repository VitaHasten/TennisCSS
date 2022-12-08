// Index-sidan innehåller två cards med två knappar för "läs-mer" och har likadan kod. 
// För att koden ska veta vilket card som ska öppnas vid knapptryck har jag skapat denna funktion som håller i sär detta.

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

// Denna funktion används när hamburgermenyn i responsivt läge "vecklas ut".

const button = document.getElementById("my-button");
const nav = document.getElementById("mynav");

button.addEventListener('click', () => {
nav.classList.toggle('show');
});

// Validering för mina formulär. Kontrollerar att telefonnumret innehåller exakt 10 st siffror.
// Då jag har flera formulär och de innehåller olika parametrar, så finns det flera valideringsfunktioner.
// När telefonnumret fylts i på ett korrekt sätt så anropas en ny funktion som poppar upp en bekräftelsebild
// och sammanfattning på den lagda bokningen. 

// Validering 1

function validateForm() {
  event.preventDefault();

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
    setTimeout(openPopup, 500);
    return true;
  }
}

// Validering 2


function validateForm2() {
  event.preventDefault();
  let c = document.forms["formOne"]["phone"].value;
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
    setTimeout(openPopup2, 500);
    return true;
  }
}

// Popup-funktionen som nämns ovan.

// Popup 1

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

// Popup 2


function openPopup2(){
console.log("open popup2 körs");
  let popup = document.getElementById("popup")
  
  let namnTd=document.getElementById("fname").value+(" ")+document.getElementById("lname").value;
  let datumTd=document.getElementById("datum").value;
  let tidTd=document.getElementById("tid").value;
  let phoneTd=document.getElementById("phone").value;
  
  popup.classList.add("open-popup")
  
  const resultat = document.getElementById("resultat");
  resultat.innerHTML="Namn: "+namnTd+"<br/>"+"Datum: "+datumTd+"<br/>"+"Tid: "+tidTd+"<br/>"+"Mobilnummer: "+phoneTd+"<br/>";
  
  }

function closePopup(){
    popup.classList.remove("open-popup")
}
  