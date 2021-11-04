 function reverseString(str) {
            str = str.split('');
            const iterate = str.length / 2;
            for(let i=0;i<iterate;i++)
            {
                let temp = str[i];
                str[i] = str[str.length-1 -i];
                str[str.length-1 -i] = temp;
            }
            return str.join('');
}

function reverseString2(str) {
       return str.split('').reverse().join('');
}

function reverseString3(str) {
    let reverse = [];

    for(let i= str.length - 1; i >=0; i--)
    {
        reverse = reverse.concat(str[i]);
    }
    return reverse.join('')
}

function reverseString4(str){
    let reverse = '';

    for(let character of str)
    {
        reverse = character + reverse
    }
    return reverse;
}



const result = reverseString4("Greetings!");
console.log(result); 