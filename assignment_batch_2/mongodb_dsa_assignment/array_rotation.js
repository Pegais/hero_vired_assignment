// Write a program to rotate a given array by N steps in clockwise direction
// Sample input one
// let Array = [3,1,2,5,7]
// let N =1
// Sample output one
// 5,7,3,1,2
// Sample input Two
let Array =[1,2,3,4,5]
let N = 2
// Sample output two
// 5,1,2,3,4


// this example is just for explanation purposes only;

function rotate_array(arr, n) {
    let temp_arr = [];
    let temp = []
    let index2 = 0;
    let temp_index = 0;
    let k = 0;
    for (let i = 0; i < arr.length - n; i++) { 
        temp_arr[temp_index] = arr[i];
        temp_index++
    }
    for (let i = arr.length-n; i < arr.length; i++) { 
        temp[index2] = arr[i];
        index2++;
    }
    
    for (let i = 0; i < temp.length; i++) { 
        arr[k] = temp[i];
        k++;
    }
    for (let i = 0; i < temp_arr.length; i++) { 
        arr[k] = temp_arr[i];
        k++
    }
    console.log(arr);
}
// rotate_array(Array,N)

// main logic => for clockwise rotate;
// actually we have to shift to right at the given n number of time of rotaion;
// and it will give us the required roation;

function rotate(arr, n) { 
    for (let i = 0; i < n; i++) { 
        let j;
        let last_element = arr[arr.length - 1];
        for (j = arr.length-1; j > 0; j--) { 
           arr[j] = arr[j -1];
        }
        arr[0] = last_element;
    }
    console.log(arr);
}
rotate(Array,N)