
//Coding question on encode and decode string array

function encode(str)
{
    return window.btoa(str);
}

function decode(str){
    return window.atob(str)
}

function encodeDecode(str)
{
    let strEncode = window.btoa(str);
    console.log(strEncode)
    console.log(window.atob(strEncode))
}

function encodeDecodeUrl(url)
{
    let urlStr = window.encodeURIComponent(url)
    console.log(urlStr);
    console.log(window.decodeURIComponent(urlStr))
}

const fn = encodeDecodeUrl('CodezUp')
console.log(fn);

