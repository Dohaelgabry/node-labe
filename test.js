const todo = require("./Processes");

//  0      1    2
// node file input
switch (process.argv[2]) {
  case "add":
    todo.add(process.argv[3], process.argv[4]);
    break;

  case "list":
    todo.list();
    break;

  case "edit_garde":
    todo.edit_garde(process.argv[3], process.argv[4]);
    break;

  case "deleted":
    todo.deleted(process.argv[3]);
    break;

  case "sum":
    todo.sum();
    break;

  ///Delet one object
  // case "delTodo":
  //   todo.delTodo();
  //   break;
}
