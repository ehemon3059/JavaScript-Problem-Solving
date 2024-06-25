//Find Vowles in string
// Method 1 
// time complexity O(n)

// const strings = "my name is emon";

// const vowels = new Set(['a','e','i','o', 'u']);

// function findvowels(data){
//     if(!data) return 0;
//     let count =0;
//     data.trim().toLowerCase().split("").forEach((element) => {
//         if(vowels.has(element)) count++;
//     });
//     return count;
// }

// console.log(findvowels(strings))


//Find Vowles in string
// Method 2
// time complexity O(n)

const strings = ("my name is emon");

function findVowles(data){
    if(!data) return 0
    const matchVowels = data.match(/[aeiou]/gi);
    return matchVowels ? matchVowels.length : "nothing";
}

console.log(findVowles(strings))



