function stringReverse(str){
    let splitString = str.split("");
    let reverseArray = splitString.reverse();
    let reverseString = reverseArray.join("");

    return reverseString;
}

console.log(stringReverse("Emon"))