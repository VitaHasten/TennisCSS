function buttonOne(){
  myFunction("one");
}
function buttonTwo(){
  myFunction("two");
}

// Denna funktion är hämtad från W3Schools-mall.
function myFunction(buttonName) {
    if(buttonName == "one")
      {
        var dots = document.getElementById("dots1");
        var moreText = document.getElementById("more1");
        var btnText = document.getElementById("myBtn1");
      }
      else{
        var dots = document.getElementById("dots2");
        var moreText = document.getElementById("more2");
        var btnText = document.getElementById("myBtn2");
      }
    
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Läs mer";
      moreText.style.display = "none";
    } else {
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
console.log(button.innerHTML);


  