const names = ["hello", "goodbye", "j", "J", "Goodbye", "JSomeName", "Hello", "SomeName"];

function printNames(namesArray) {
  namesArray.forEach(name => {
    const firstChar = name.charAt(0);
    if ("aeiou".includes(firstChar)) {
      console.log(name);
    } else {
      console.log("Goodbye " + name);
    }
  });
}

printNames(names);
