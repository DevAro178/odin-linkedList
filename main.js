import LinkedList from "./linkedlist.js";
const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");
list.prepend("horse");
// list.pop();
// list.toString();
// list.insertAt("hello", 0);
// list.removeAt(0);
console.log(list.toString());
