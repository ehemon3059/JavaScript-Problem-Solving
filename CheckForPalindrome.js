function checkPalindrom(str){

    // Remove all non-alphanumeric characters and convert to lowercase
    let astr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    //initilize pointer for start and end of the string
    let left = 0 ;
    let right = str.length - 1;

    //compare string from the beginning and end 

    while(left<right){
        if(astr[left] !== astr[right]){
            return false;
        }
        left++;
        right--;
    }
 // If we completed the loop without returning false, it's a palindrome
    return true;
}

const example2 = "Davad";
const example3 = "Davad2";
console.log(checkPalindrom(example2));
console.log(checkPalindrom(example3));