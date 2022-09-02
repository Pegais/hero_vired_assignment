// introduction : in bubble sort ,we compare adjacent elements and than swap te positon of elements in
// particular order.
// we creted a  swapped flag to check when the array is modified and then toggle between true and false

// if swapped false => no need =>for loop  to work => basically sorting is not required now;
// if swapped true => for loop to work =>basically array has been modified and element has been swapped;
let arr = [1, 3,-1, 8]

function bubbleSort(arr) {
    let swapped;
   do {
       swapped = false;
       for (let i = 0; i < arr.length-1; i++) {
           if (arr[i] < arr[i + 1]) {
               let container;
               container = arr[i];
               arr[i] = arr[i + 1];
               arr[i + 1] = container;
               swapped = true;
           }
       }
    } while (swapped);
    return arr
}

console.log(bubbleSort(arr));