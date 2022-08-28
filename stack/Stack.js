const { LinkedList, Node } = require("../linkedlist/index");

class Stack {
  constructor(){
    // use linked list as data set
    this.data = new LinkedList();
  }

  push(data){
    // push method - adds the element on the top of the stack;
    this.data.insertFirst(data);
  }

  pop(){
    // pop method - removes the last added to the stack in this case, the head.
    this.data.removeFirst();
  }

  print(){
    his.data.print();
  }
}



const stack = new Stack();
stack.push(100);
stack.push(200);
stack.push(300);
stack.push(400);

stack.pop();

stack.print();

module.exports = {
  Stack
}
