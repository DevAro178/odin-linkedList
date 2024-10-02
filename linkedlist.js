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

  prepend(value) {
    this.current = new node(value);
    this.current.next = this.head;
    this.head = this.current;
  }

  size() {
    let current = this.head;
    let size = 0;
    while (current) {
      size++;
      current = current.next;
    }
    return size;
  }

  firstNode() {
    return this.head;
  }

  lastNode() {
    return this.tail;
  }

  at(index) {
    let current = this.head;
    let count = index;
    let value = null;
    while (current) {
      if (count == 0) {
        value = current;
        current = null;
        break;
      }
      count--;
      current = current.next;
    }
    return value;
  }

  pop() {
    let current = this.head;
    let prev = null;
    while (current) {
      if (current.next == null) {
        this.tail = prev;
        this.tail.next = null;
        break;
      }
      prev = current;
      current = current.next;
    }
  }

  contains(value) {
    let current = this.head;
    let found = false;
    while (current) {
      if (value == current.value) {
        found = true;
        break;
      }
      current = current.next;
    }
    return found;
  }

  find(value) {
    let current = this.head;
    let found = false;
    let index = 0;
    while (current) {
      if (value == current.value) {
        found = true;
        break;
      }
      current = current.next;
      index++;
    }
    return index;
  }

  toString() {
    let current = this.head;
    let end = false;
    let response = "";
    while (!end) {
      current = current.next;
      if (current) {
        response += "(" + current.value;
        response += ") -> ";
      } else response += "null";

      if (current == null) {
        end = true;
      }
    }
    return response;
  }

  insertAt(value, index) {
    let current = this.head;
    let prev = null;
    let valid = true;
    for (let i = 0; i <= index; i++) {
      prev = current;
      current = current.next;
      if (current == null) {
        console.log("Invalid Index");
        valid = false;
        break;
      }
    }
    if (valid) {
      let newNode = new node(value);
      prev.next = newNode;
      newNode.next = current;
    }
  }

  removeAt(index) {
    let current = this.head;
    let prev = this.head;
    let valid = true;
    for (let i = 0; i <= index; i++) {
      prev = current;
      current = current.next;
      if (current == null) {
        console.log("Invalid Index");
        valid = false;
        break;
      }
    }
    if (valid) {
      prev.next = current.next;
    }
  }
}
