const { LinkedList } = require("../linkedlist/index");

// FIFO (firs in first out)
class Queue {
  constructor(){
    // use linked list as data set
    this.data = new LinkedList();
  }
  
  enqueue(data){
    // add element to the top
    this.data.insertFirst(data);
  }

  dequeue(){
    // remove the last element 
    this.data.removeLast();
  }

  print(){
    this.data.printData();
  }
}

const queue = new Queue();
queue.enqueue(100)
queue.enqueue(200)
queue.enqueue(300)

queue.dequeue();

queue.print();

module.exports = {
  Queue
};
