
// OBJECT EXAMPLE-------------
const obj = {
    name: "Daniel",
    lastName: "Santos",
    personalinformation: {
       date: "11-11-2222",
       phone: 1122334455, 
    },
    editA() {
        this.name = "DANIEL";
    }
}; 
// ------------------

// -------------init here 
function isObject(element) {
  return typeof element == "object";
  // return true or false 
}

function isArray(element) {
  return Array.isArray(element);
  // return true or false 
}

function deepCopy(element) {
  let copyElement;

  if (isObject(element)) {
   copyElement = {};
  } else if (isArray(element)) {
   copyElement = [];
  } else {
    return element;
  }

  for (key in element) {

    if (isObject(element[key])) {
     copyElement[key] = deepCopy(element[key]);
    } 
    else if (isArray(element[key])) {
     copyElement.push(element[key]);
    } 
    else {
     copyElement[key] = element[key];
    }    
  }

  return copyElement;
}
// --------------end here 


// example test
const copyObj = deepCopy(obj);
