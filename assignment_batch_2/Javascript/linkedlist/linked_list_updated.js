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

const list = {};
let head = null;
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

insert(2)
insert(3)
insert(1)
insert(4)

console.log(list);