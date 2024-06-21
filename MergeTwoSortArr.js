// Problem 3: Merge Two Sorted Arrays

function margeTwoSortArry(arr1,arr2){
    let result = [];
    let i = 0 , j = 0;
    while(i < arr1.length && i < arr2.length){
        if(arr1[i] < arr2[j]){
            result.push(arr1[i]);
            i++;
        }else{
            result.push(arr2[j]);
            j++;
        }
    }

    return result.concat(arr1.slice(i)).concat(arr2.slice(j))
}

const arr1 = [1,3,5,7,9];
const arr2 = [2,4,6,8,10];
console.log(margeTwoSortArry(arr1,arr2))