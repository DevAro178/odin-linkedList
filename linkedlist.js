import node from "./node.js";

export default class LinkedList {
  constructor() {
    (this.head = null), (this.tail = null), (this.current = null);
  }

  append(value) {
    this.current = new node(value);
    if (this.head == null) {
      this.head = this.current;
      this.tail = this.current;
    }
    this.tail.next = this.current;
    this.tail = this.current;
  }

  toString() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
}
