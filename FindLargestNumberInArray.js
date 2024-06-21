//Method 1;

function findLargNumber(arr){
    if(arr.length ===  0){
        throw new Error("Array is Empty");
    }
    
    //initilized first number is largest number
    let largNumber =arr[0];

    for(let i=1; i<arr.length; i++){
        if(arr[i] > largNumber){
            largNumber = arr[i]
        }
    }

    return largNumber;
}

const numbers = [100,45,67,89,0,2,90];
//console.log(findLargNumber(numbers));


//Method 2; Reduce Method

function findLargNumber2(arr){
    if(arr.length === 0){
        throw new Error("Array is Empty")
    }
    return arr.reduce((max, current)=>{
        return current > max ? current: max
    },arr[1])
}

const numbers2 =[12,34,56,76,89,599];
//console.log(findLargNumber2(numbers2))


//Method 3: Using Math.max and the Spread Operator

function findLargNumber3(arr){
    if(arr.length === 0 ){
        throw new Error("Array is empty")
    }

    return Math.max(...arr)
}

const numbers3 =[12,34,86,76,89,59];
console.log(findLargNumber2(numbers3))