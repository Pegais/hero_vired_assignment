// Exercise 2: A computer programmer stored the password to his account in an
// array. To keep this password safe he then rotated the array in anticlockwise
// direction N times. Now he wants to know his password. Write a code that
// takes following output:
//  N, number of elements
//  Elements of the array
//  R, number of rotations
// Print the values after rotating the array R number of times.

// arr=[[1,2,3,4]
// anticlockwise rotation of array =[4,3,1,2]



function rotate_password(n, round) {
    // n is the number of elements;
    // round is the number of rounds to rotate the array ;
    let Arr = [];
    let temp = [];
    let index=0

    for (let i = 0; i < n; i++) {
        let input = prompt("please enter your elements of array");
        Arr[i]=input
    }
    // FIRST WE TAKE THE ELEMENTS FROM LAST TILL THE NO. OF ROUND GIVEN ;
    // WE REVERSE AND STORE THEM IN TEMP_ARR;
    for (let i = Arr.length; i > round; i--){
        temp[index] = Arr[i-1];
        index++;
    }
    // REMAINING ELEMENTS OF ARRAY IS GIVEN TO THE TEMP ARRAY;

    for (let i = 0; i < round; i++) { 
        temp[index] = Arr[i];
        index++;
    }
    Arr = temp;
    console.log(Arr);
}

rotate_password(4,2)
// console.log("rotated password is",rotated_password);