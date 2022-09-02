// insert element in middle of the array;
// to insert or delete the element in the middle of the array,we can use splice() method;
// splice()=>has parameters like this => splice(index,deletecount,addcount);
// to add element ,keep delete count 0;

let arr = ['a', 'b', 'd', 'e', 'f']

function insertElementInArr(arr) {
    let mid = Math.floor((arr.length / 2));
    // getting the middle index of array;
    let deletecount = 0;
    arr.splice(mid, deletecount, 'c');
    // last parameter is the thing you want to insert.
    return arr;
}

console.log(insertElementInArr(arr));