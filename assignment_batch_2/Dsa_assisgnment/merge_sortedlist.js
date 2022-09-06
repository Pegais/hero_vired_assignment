// // Exercise 4: While storing the data (integer values) in a linked list, a programmer
// // accidentally created two linked lists. Some of the data got stored in one linked
// // list and remaining got stored in the other list. Both linked lists are in sorted
// // form. Now the programmer wants to create a single list by combining the two
// // lists in such a way that the newly created list should be in sorted order as well.
// // Create a program that can perform this task.

// // step 1: both the list are sorted ;
// // step 2: create list1 and list2 and list3 in which we will append the smallest element of both list;

// // first code to to create a linkedlist;
// // in javascript ,linked list looks like this;
// // const list = {
// //     head: {
// //         value: 6
// //         next: {
// //             value: 10
// //             next: {
// //                 value: 12
// //                 next: {
// //                     value: 3
// //                     next: null
// //                     }
// //                 }
// //             }
// //         }
// //     }
// // };

// // sample  : list1=>1->3->6    list2=>2->4->5
// const list1 = {
//     head: {
//         value: 1,
//         next: {
//             value: 3,
//             next:{
//                 value: 6,
//                 next:null
//             }
//         }
//     }
// }
// // console.log(list1.head.value);
// const list2 = {
//     head: {
//         value: 2,
//         next: {
//             value: 4,
//             next:{
//                 value: 5,
//                 next:null
//             }
//         }
//     }
// }
// const list3 = {};
// let head = null;
// let next = null;
// let size = 0;

// // // this function will create a node ,which will be inserted into the list
// // the node will have a value and next pointer to different node;
// // if node pointer has no node to point , it will have null value;
// function create(value) {
//     let node = {
//         value: -1,
//         next:null
//     }
//     return node;
// }


// // function append(list,value) {
// //     let node = create(value);

// //     if (size === 0) {
// //         list.head = node;
// //     } else {
// //         let prev = list.head;
// //         while (prev.next) {
// //             prev = prev.next;
// //         }
// //         prev.next = node;
// //     }
// //     size++;
// //     return list;
// // }
// function merge_list(list1, list2,) {
//     // creating a node;
//     let node = create();
//     list3.head = node;
//     let prev = list3.head;

//     // checking if any of the list is empty;
//     while (list1.head!== null && list2.head !== null) { 
//         if (list1.head.value  <=  list2.head.value) {
//             prev.value = list1.head.value;
//             list1.hea = list1.head.next;
//         }else{
//             prev.value = list2.head.value;
//             list2 = list2.head.value;
//         }
//         console.log(list1.head.value);
//         prev = prev.next;
//     }
//     // once we reach the end of any link;
//     // append the other list to sorted list
//     if (list1 === null) { prev.next=list2}
//     if (list2 === null) { prev.next = list1 }
    

//     console.log(list3);
// }

// // ******************************** ****************************************************************

// merge_list(list1, list2)


// // console.log(list2);