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
console.log(result);