//votre code ici

function pairNumbers(min, max){
    let val = [];
    for (let i = min; i < max; i++)
    {
        if(i % 2 === 0){
            val.push(i);

        }
    }
    return val.join(',');
}

export default pairNumbers
