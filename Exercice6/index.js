let num1 = [];
let num1Int;

let num2 = [];
let num2Int;
let operator = '';
let resultat;
const displayValue = document.getElementById('display');

function appendToDisplay(a)
{
    if (!isNaN(a))
    {
        a = Number(a);
    }
    else 
    {
        operator = a;
    }

    if(!isNaN(a) && operator == '')
    {
        num1.push(a);
        num1Int = Number(num1.join(""));
    }
    else if (!isNaN(a) && operator != '')
    {
        num2.push(a);
        num2Int = Number(num2.join(""));
    }

    if(operator == '')
    {
        displayValue.value = num1Int;
    }
    else if (num2.length === 0 && operator != '')
    {
        displayValue.value = operator;
    }
    else {
        displayValue.value = num2Int;
    }
    
    console.log(num1Int);
    console.log(num2Int);
}

function clearDisplay()
{
    displayValue.value = '';
    num1 = [];
    num2 = [];
    //num1Int = 0;
    //num2Int = 0;
    num1Int = null;
    num2Int = null;
    resultat = null;
    operator = '';
}

function calculateResult()
{
    if (operator == '+') 
        {
            resultat = num1Int + num2Int;
            displayValue.value = resultat;
        }
        else if (operator == '-')
        {
            resultat = num1Int - num2Int;
            displayValue.value = resultat;
        }
        else if(operator == '*')
        {
            resultat = num1Int * num2Int;
            displayValue.value = resultat;
        }
        else if(operator == '/')
        {
            if (num2Int == 0)
            {
                resultat = "Division by zero is not allowed";
                displayValue.value = resultat;
            }
            else {
                resultat = num1Int / num2Int;
                displayValue.value = resultat;
            }
        }
}