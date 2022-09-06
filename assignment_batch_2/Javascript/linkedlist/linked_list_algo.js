// in javascript ,linked list looks like this;
// const list = {
//     head: {
//         value: 6
//         next: {
//             value: 10
//             next: {
//                 value: 12
//                 next: {
//                     value: 3
//                     next: null
//                     }
//                 }
//             }
//         }
//     }
// };

const list = {head:null};

let next = null;
let size = 0;

// this function will create a node ,which will be inserted into the list
// the node will have a value and next pointer to different node;
// if node pointer has no node to point , it will have null value;
function create(value) {
    let node = {
        value: `${value}`,
        next:null
    }
    return node;
}


function prepend(value) {
    // calling create funtion to create a node;
    let node = create(value);
    
    if (size === 0) {
        // checking the size of list and if it is zero insert the node;
        list.head = node;
    } else {
        // if size is not zero of list;
        // existing node's next pointer will point to the node which is at the list'head;
        // and the list's head will point to newly created node;
       
        node.next = list.head;
        list.head = node
    }
    size++;
    return list;
}

// console.log(prepend(10));
// console.log(prepend(20));
// console.log(prepend(30));
// console.log(prepend(40));


// lets write a append method in list ;

function append(value) { 
    let node = create(value);
    // console.log(node);
    if (size === 0) {
        list.head = node;
    } else {
   
        // console.log(new_node.value,"new node value");
        let prev = list.head;
        while (prev.next) {
            prev = prev.next;
            // console.log(prev);
        }
      
        prev.next = node;
    }
    size++;
    // console.log(size);
    return list;
}


// append(30)
// append(10)
// append(20)
// console.log(list);

// this insert function is useful as it will check for sorted link list and insert the value;
function insert(value) {
    let new_node = create(value);
    if (list.head == null || list.head.value >= new_node.value) {
        new_node.next = list.head;
        list.head = new_node;
    } else {
        current = list.head;
        while (current.next != null && current.next.value < new_node.value) { 
            current = current.next;
            
        }
        new_node.next = current.next;
        current.next = new_node;
    }
}

// Create a sorted linked list from an unsorted array
let arr = [3, 4, 1, 2, 8, 0];

// without using bubble sort,we will direclty insert in list and check at the same time;

for (let index = 0; index < arr.length; index++) {
    insert(arr[index])
    
}



// check the list here if it is sorted or not
console.log(list);




// we will sort the array by using bubble sort and than insert the values in list;
// function bubbleSort(arr) {
//     let swapped;
//    do {
//        swapped = false;
//        for (let i = 0; i < arr.length-1; i++) {
//            if (arr[i] >arr[i + 1]) {
//                let container;
//                container = arr[i];
//                arr[i] = arr[i + 1];
//                arr[i + 1] = container;
//                swapped = true;
//            }
//        }
//     } while (swapped);
//     return arr
// }
// let sortedArr = bubbleSort(arr);
// for (let i = 0; i < sortedArr.length; i++){
//     console.log(append(sortedArr[i]));
// }