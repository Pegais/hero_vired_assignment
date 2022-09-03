// REMEMBER : Queue follow first in first out principle;
let current = 0;
// to keep track of index value whenever element is inserted in queue;
let queue = [1, 2, 3, 4]

// this will act as push method to add element at the end of queue;
function insert_in_queue(num) { 
    current = queue.length;
    queue[current] = num;
    current++;
    return queue;
}

insert_in_queue(5);

// ************************************************************************************************************************************

// to keep track of index of queue and points to first element of queue;
let icurrent=0
// this will act as shift method to remove element at the start of queue;
let first_arr_index = 0

function remove_from_queue( ) { 
    let arr = [];
    let arr2 =[]
    let index = 0;
    // console.log(queue[current]);
    if (queue.length) {
        

        arr[first_arr_index] = queue[icurrent];
        icurrent++;
        first_arr_index++;
        for (let i = arr.length; i < queue.length; i++){
            arr2[index] = queue[i];
            index++;
        }
        queue = arr2;
        return queue;
    } 

    return queue;
    // console.log(queue,"new queue");
    // console.log(arr2,"arr2");
}

console.log("current queue elements",queue);
console.log(remove_from_queue(),"removed from queue");
// console.log(remove_from_queue(queue));

// *********************************************************************    **************  ********    ********    *

// search in queue ;

// console.log("check queue elemets",queue);
function search_queue_and_retreive_element(num) {
    let search_index = -1;
    let flag = false;
    let index_arr2 = 0;
    let arr1 = [];
    // we will use arr1 to keep track of search_elements till which element was found;
    let arr2 = [];
    // we will use arr2 to keep remainig element of queue after the element we wanted to search was found;
    let retrived_element;
    let arr2_index = 0;
    // checking for element in queue and giving the search_index at which the given number is found;
    for (let i = 0; i < queue.length; i++) { 
        if (!flag) {
            arr1[i] = queue[i];
        } else {
            arr2[arr2_index] = queue[i];
            arr2_index++;
        }
        if (queue[i] == num) {
            search_index = i;
            flag = true;
        }
    }

    // console.log(arr1, arr2);
    retrived_element =arr1[arr1.length-1]
    
    // now making modyfying the elements of queue since we retreived one element from the queue;
    arr1.length = arr1.length - 1;
    // since we took one elements from array one,which was the element we were seaching to retrive;
    for (let i = 0; i < arr1.length; i++) { 
        queue[i]=arr1[i];
    }
    for (let j = arr1.length; j < queue.length-1; j++){
        queue[j] = arr2[index_arr2];
        index_arr2++;
    }
    queue.length =queue.length - 1;
    console.log(`your search index is ${search_index},your retrived value from queue is ${retrived_element}`)
    return queue;
}

console.log(search_queue_and_retreive_element(2));