// Create a sorted linked list from an unsorted array

let arr = [2, 1, 3, 4, 5, 12]
// sort the array first
// we can use sort() with numeric comparison functions
// and if array is alphabetical use default  sort();
arr = arr.sort(function (a, b) { return a - b })
// console.log(arr);


// now defining the LinkedList and node of LinkedList;

// first defining the node of linked list;
// so a node contatins value and a next pointer which initially points to null ;

class Node{
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList{
    constructor() {
        // head record and size record of linked list
        this.head = null
        this.size = 0;
    }
    isEmpty() { return this.size === 0 }
    getSize() { return this.size; }

    // append method to add a node to list after head ;
    append(value) {
        const node = new Node(value);
        // node created here;
        // list is empty
        if (this.isEmpty()) {
            this.head = node;
            // if empty list head beecomes the new node inserted;
        } else {
            let prev = this.head;
            while (prev.next) {
                // checking to see if node encountered is poiting to null;
                // if null , than while loop breaks;
                prev = prev.next;
            }
            // insert the new node to the node previouly pointing to null;
            prev.next = node;
        }
        this.size++;
        // after adding element ,increase size of list;
        
    }
    print() {
        if (this.isEmpty()) {
            console.log("list is empty")
        } else {
            let curr = this.head;
            let listValues = ``;
            while (curr) {
                listValues += `${curr.value} `
                curr = curr.next;
            }
            console.log(listValues);
        }
    }
}

const list = new LinkedList();
console.log(list.isEmpty());

// now insertin the element of our sorted array into the list;

for (let i = 0; i < arr.length; i++) { 
   list.append(arr[i]);

}

list.print()