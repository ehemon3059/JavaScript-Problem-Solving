//This is friend list
const friends = ['Emon','korim','sunny','sunny','emon','korim','Emu'];

//now i have to remove duplicate name from this array

//make a function to do this

function removeDuplicate(names){
    //make an empty array
    const friendsName = [];

    //create a loop to separet name
    for(let i = 0; i<names.length; i++){

        //str.charAt(0): Get the first character of the string.
        //.toUpperCase(): Convert the first character to uppercase.
        //str.slice(1): Get the substring of the original string starting from the second 
        const name = names[i].charAt(0).toUpperCase()+names[i].slice(1);
        console.log(name);
        console.log(friendsName.includes(name));
        if(friendsName.includes(name) === false){
            //name push on friendsName Array
            friendsName.push(name)
        }

    }
    return friendsName;
}

const result = removeDuplicate(friends);
console.log(result);