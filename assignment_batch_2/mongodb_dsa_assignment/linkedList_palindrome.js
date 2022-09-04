// Given a linked list, write a program to check if the linked list is palindrome or not.

// Sample input one:- 1 -> 2 -> 3

// Sample output one:- false

// Sample input two:- 1 -> 2 -> 3 -> 2 -> 1

// Sample output one:- true


// ****************************************************************
// approach : we will use stack to store element of linked list;
// since stack uses LIFO principle, the element poped form stack will be the last element of list.
// now we compare the elements of the linked list with the elements poped from stack;
// if the any element does not match , list is not palindrome;


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

prepend(1)
prepend(2)
prepend(3)
// prepend(2)
// prepend(1)

console.log(list);


// now code for checking palindrome;

function checkPalindrome(list) {
    let palindrome = true;
    let pointer = list.head;
    let stack = [];
    // pushing the elements of list to stack
    while (pointer != null) { 
        stack.push(pointer.value);
        pointer=pointer.next
    };

    // now checking the popped elements of stack with the elements of list;
    while (list.head != null) { 
        let element_popped_from_stack = stack.pop();
        if (list.head.value == element_popped_from_stack) {
            palindrome = true;
        } else {
            palindrome = false;
            break;
        }
        list.head = list.head.next;
    }
    return palindrome;

}

console.log(checkPalindrome(list));