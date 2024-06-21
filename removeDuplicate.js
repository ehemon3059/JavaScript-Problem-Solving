// Method 1 :
//This is friend list
const friends = ['Emon','korim','sunny','sunny','eMon','korim','Emu'];

//now i have to remove duplicate name from this array
//make a function to do this
function removeDuplicate(names){
    //make an empty array
    const friendsName = [];

    //create a loop to separate name
    for(let i = 0; i<names.length; i++){
        const name = names[i].toUpperCase();
    
        if(friendsName.includes(name) === false){
            //name push on friendsName Array
            friendsName.push(name)
        }
        

    }
    return friendsName;
}

const result = removeDuplicate(friends);
//console.log(result);


// Method 2 

// This is friend list
const friends2 = ['Emon', 'korim', 'sunny', 'sunny', 'eMon', 'korim', 'Emu','Jony'];

// Now I have to remove duplicate names from this array
// Make a function to do this
function removeDuplicate(names) {
    // Make an empty array for unique names
    const uniqueNames = [];
    
    // Make an empty array for duplicate names
    const duplicateNames = [];

    // Create a loop to separate names
    for (let i = 0; i < names.length; i++) {
        const name = names[i].toUpperCase();

        if (!uniqueNames.includes(name)) {
            // Name push on uniqueNames array
            uniqueNames.push(name);
        } else if(!duplicateNames.includes(name)){
            // Name is a duplicate, push it to duplicateNames array
            duplicateNames.push(name);
        }
    }

    return { uniqueNames, duplicateNames };
}

const { uniqueNames, duplicateNames } = removeDuplicate(friends2);

// Print the unique names
console.log("Unique Names:");
uniqueNames.forEach(name => {
    console.log(name);
});

// Print the duplicate names
console.log("\nDuplicate Names:");
duplicateNames.forEach(name => {
    console.log(name);
});


