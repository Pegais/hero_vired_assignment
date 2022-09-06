// insert element in middle of the array;
// to insert or delete the element in the middle of the array,we can use splice() method;
// splice()=>has parameters like this => splice(index,deletecount,addcount);
// to add element ,keep delete count 0;

let arr = [1,2,3,4,5]

function insertElementInArr(arr) {
    let mid = Math.floor((arr.length / 2));
    // getting the middle index of array;
    let deletecount = 0;
    arr.splice(mid, deletecount, 'c');
    // last parameter is the thing you want to insert.
    return arr;
}

// console.log(insertElementInArr(arr));



// using for loop ******************************



// program to insert an item at a specific index into an array

function insertElement(arr,ele) {

    // index to add to
    let index = Math.floor(arr.length / 2);

    // element that you want to add
    let element = ele
  
    for (let i = arr.length; i > index; i--) {

        //shift the elements that are greater than index
        arr[i] = arr[i-1];
    }

    // insert element at given index
    arr[index] = element;
    return arr;
}

console.log(insertElement(arr,6));