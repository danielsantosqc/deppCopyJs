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
function typeOfElement (element){
  switch (Object.prototype.toString.call(element)){
    case "[object Object]":
      return "object";
    case "object Array ":
      return "array";
    default:
      return "It's probably primitive data."
  }
}

function deepCopy(element) {
  let elementType = typeOfElement(element);
  if(elementType !== "array" && elementType !== "object") return element;
  
  let copyOfElement;
  if(elementType === "object") copyOfElement = {};
  if(elementType === "array") copyOfElement = [];

  for(let item in element){
    copyOfElement[item] = deepCopy(element[item])
  }

  return copyOfElement;
}
// --------------end here 


// sample test
console.log('original obj.:', obj);
const copyObj = deepCopy(obj);
obj.personalinformation.phone = 12;
console.log('original obj:', obj);
console.log('copy obj:', copyObj);

copyObj.personalinformation.phone = 555;
console.log('copy obj after copy:', copyObj);
console.log('original obj.:', obj);
