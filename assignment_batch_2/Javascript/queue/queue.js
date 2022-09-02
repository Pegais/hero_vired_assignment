class Queue{
    constructor() {
        this.items = [];
    }
    enqueue(element) { 
        // push the item to rear end;
        this.items.push(element)
    }
    dequeue() { 
        // delete the item fro front 
        this.items.shift();
    }
    // this is search() method ,it will search the queue for element and retreive the index of element found;
    search(element) {
        if (this.items.includes(element)) {
            let result = `${this.items.indexOf(element)},this is the index of element found`
            return result
        } else {
            return `not found`;
        }
    }

    isEmpty() {
        return this.items.length === 0
    }
//   this is retrieve method, to retrive 
    retrieve(element) { 
        if (!this.isEmpty()) { 
            let result =`${this.search(element)}`
           return result;
        }
    }
    print() {
        console.log(this.items.toString());
    }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);

queue.print();
console.log(queue.retrieve(8));
