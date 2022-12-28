let arr = [
  { name: "Doha", garde: 100 },
  { name: "Mohamed", garde: 90 },
  { name: "Gamal", garde: 80 },
];

function add(name, garde) {
  let B = { name, garde };
  arr.push(B);
  console.log(arr);
}

function list() {
  for (let i in arr) {
    console.log(arr[i].name);
    console.log(arr[i].garde);
  }
}

function edit_garde(index, new_garde) {
  arr[index].garde = new_garde;
  console.log(arr);
}

function deleted(index) {
  delete arr[index];
  console.log(arr);
}

// console.log(arr);

function sum() {
  let x = 0;
  for (let i in arr) {
    // arr[i].garde;
    // console.log(arr[i].garde);
    x += arr[i].garde;
  }
  console.log(x);
}

///Delet one object
// function delTodo(id) {
//   arr.splice(id, 1);
//   console.log(arr);
// }

module.exports = { add, list, edit_garde, deleted, sum };
