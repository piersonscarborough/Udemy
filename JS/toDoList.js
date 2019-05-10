var todos = [];

var input = prompt("what would you like to do?");

while(input !== "quit"){
    if(input ==="list") {
        listTodos();
    } else if(input === "new") {
        var newTodo = prompt("enter new todo");
        todos.push(newTodo);
    } else if(input === "delete"){
        var index = prompt("Enter index of todo to delete");
        todos.splice(index,1);
    }
    input = prompt("what would you like to do?")
}
console.log("OK, YOU QUIT THE APP")

function listTodos(){
    todos.forEach(function(todo, i){
        console.log(i + ": " + todo);
        alert(i + ": " + todo);
    });
}