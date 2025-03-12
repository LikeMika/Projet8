const buttonTest = document.getElementById('myButton');

buttonTest.addEventListener("click", function() {
    const par = document.createElement('p');
    par.textContent = "Bonjour, vous avez cliqué sur le bouton !";
    document.body.appendChild(par);
});