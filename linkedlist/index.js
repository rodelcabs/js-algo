
class Node {
  constructor(data, next=null){
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor(){
    this.head = null;
    this.size = 0;
  }

  // insserting
  insertFirst(data){
    this.head = new Node(data, this.head);
    this.size++;
  }

  insertLast(data){
    let node = new Node(data);
    let current;

    if(!this.head){
      this.head = node;
    }else{
      current = this.head;
      while (current.next) {
        current = current.next;
      }

      current.next = node;
    }

    this.size++;
  }

  insertAt(index, data){
    if (index > 0 && index > this.size) {
      return;
    }

    if(index === 0){
      //add head
      this.insertFirst(data);
      return;
    }

    const node = new Node(data);
    let current, 
        previous; 

    current = this.head;
    let count = 0;
    while (count < index) {
      previous = current;
      count++;
      current = current.next;
    }
    
    node.next = current;
    previous.next = node;

    this.size++;
  }
  
  getAt(index){
    let current = this.head;
    let count = 0;

    while (current) {
      if(count == index){
        console.log(this.data(current));
      }
      count++;
      current = current.next;
    }

    return current;
  }

  getFirst(){
    if(this.head){
      console.log(this.data(this.head));
    }
    return this.head;
  }
  
  getLast(){
    let current = this.head;
    if(current){
      while (current.next) {
        current = current.next;
      }

      console.log(this.data(current));
    }
    return current;
  }

  removeFirst(){
    let current = this.head;
    this.head = current.next;
    this.size--;
  }
  
  removeLast(){
    let current = this.head;
    let previous;
    if(current){
      while (current.next) {
        previous = current;
        current = current.next;
      }
      previous.next = null;
    }
    return;
  }

  removeAt(index){
    if(index > 0 && index > this.size){
      return;
    }

    let current = this.head;
    let previous;
    let count = 0;

    if(index === 0){
      this.head = current.next;
    }
    else{
      while (count < index) {
        count++;
        previous = current;
        current = current.next;
      }

      previous.next = current.next;
    }

    this.size--;
  }
  
  reverse(){
    let current = this.head;
    let previous = null;
    let next = null;

    while(current){
      next = current.next;
      current.next = previous;
      previous = current;
      current = next;

      console.log(this.data(previous));
    }

    return;
  }

  clear(){
    this.head = null;
    this.size = 0;
  }

  print(){
    let current = this.head;
    while (current) {
      console.log(this.data(current));
      current = current.next;
    }
  }

  data(node){
    return {
        data: node.data,
        next: node.next? node.next.data:node.next
      };
  }
}

// const linkedList = new LinkedList();
// linkedList.insertFirst(100);
// linkedList.insertFirst(200);
// linkedList.insertFirst(300);
// linkedList.insertLast(400);
// linkedList.insertAt(2, 500);
// linkedList.getAt(2);
// linkedList.removeAt(2);
// linkedList.getFirst();
// linkedList.getLast();
// linkedList.removeFirst();
// linkedList.removeLast();
// linkedList.reverse();
// linkedList.print();

module.exports = {
  LinkedList,
  Node
}

