var roster = ["shiva", "sada", "ananda", "vinoda"]

function addName(name) {
  roster.push(name)
}

function removeName(name) {
  var i = 0;
  while (i < roster.length) {
    if (roster[i] === name) {
      roster.splice(i, 1)
    }
    i ++
  }
  console.log("your name " + name + " is removed")
}

function display(arr) {
  console.log(arr)
}


while (true) {
  var input = prompt("select any option in these 4 : add,remove,display, and quit")
  if (input === "add") {
    var name = prompt("enter the name")
    addName(name)
  }

  else if (input === "remove") {
    var nameRemove = prompt("enter the name to remove")
    removeName(nameRemove)
  }

  else if (input === "display") {
    display(roster)
  }

  else if (input === "quit") {
    alert("thanks for coming here")
    break;
  }
}
