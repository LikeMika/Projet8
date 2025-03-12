// Créez votre fonction ici
function calculate(numb1, numb2, operator) {
    let resultat = 0;
    numb1 = Number(numb1);
    numb2 = Number(numb2);

    if(isNaN(numb1) || isNaN(numb2))
    {
        return "Invalid input";
    }
if (operator == '+') 
{
    resultat = numb1 + numb2;
    return resultat;
}
else if (operator == '-')
{
    resultat = numb1 - numb2;
    return resultat;
}
else if(operator == '*')
{
    resultat = numb1 * numb2;
    return resultat;
}
else if(operator == '/')
{
    if (numb2 == 0)
    {
        return "Division by zero is not allowed";
    }
    else {
        resultat = numb1 / numb2;
        return resultat;
    }
}
else {
    return "Invalid operator";
}
}
// Exemples d'utilisation de la fonction
console.log(calculate(5, 3, '+'));   // Affiche 8
console.log(calculate(10, 4, '-'));  // Affiche 6
console.log(calculate(7, 2, '*'));   // Affiche 14
console.log(calculate(12, 3, '/'));  // Affiche 4
console.log(calculate(8, 0, '/'));   // Affiche "Division by zero is not allowed"
console.log(calculate(4, 5, '%'));   // Affiche "Invalid operator"

export default calculate
