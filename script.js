let C = document.querySelector("#C")
let DEL = document.querySelector("#DEL")
let plus = document.querySelector("#plus")
let seven = document.querySelector("#seven")
let eight = document.querySelector("#eight")
let nine = document.querySelector("#nine")
let minus = document.querySelector("#minus")
let four = document.querySelector("#four")
let five = document.querySelector("#five")
let six = document.querySelector("#six")
let x = document.querySelector("#x")
let one = document.querySelector("#one")
let two = document.querySelector("#two")
let three = document.querySelector("#three")
let divide = document.querySelector("#divide")
let changeSign = document.querySelector("#changeSign")
let zero = document.querySelector("#zero")
let dot = document.querySelector("#dot")
let equal = document.querySelector("#equal")
let input = document.querySelector("#input")
let operationSelected = "";
let side1 = "";
let side2 = "";
let checkSide1 = document.querySelector("#side1")
let checkSide2 = document.querySelector("#side2")
let checkOperation = document.querySelector("#Operation")


C.addEventListener("click", function C() {
    input.innerHTML = "";
    side1 = "";
    side2 = "";
    operationSelected = "";
})

seven.addEventListener("click", function seven() {
    if (operationSelected == "") {
    input.innerHTML = input.innerHTML+7;
    side1 = side1+"7"
} else {
    input.innerHTML = input.innerHTML+7;
    side2 = side2+"7"

}
})
eight.addEventListener("click", function eight() {
    if (operationSelected == "") {
        input.innerHTML = input.innerHTML+8;
        side1 = side1+"8"
    } else {
        input.innerHTML = input.innerHTML+8;
        side2 = side2+"8"
    }
})
nine.addEventListener("click", function nine() {
    if (operationSelected == "") {
        input.innerHTML = input.innerHTML+9;
        side1 = side1+"9"
    } else {
        input.innerHTML = input.innerHTML+9;
        side2 = side2+"9"
    }
})
six.addEventListener("click", function six() {
    if (operationSelected == "") {
        input.innerHTML = input.innerHTML+6;
        side1 = side1+"6"
    } else {
        input.innerHTML = input.innerHTML+6;
        side2 = side2+"6"
    }
})
five.addEventListener("click", function five() {
    if (operationSelected == "") {
        input.innerHTML = input.innerHTML+5;
        side1 = side1+"5"
    } else {
        input.innerHTML = input.innerHTML+5;
        side2 = side2+"5"
    }
})
four.addEventListener("click", function four() {
    if (operationSelected == "") {
        input.innerHTML = input.innerHTML+4;
        side1 = side1+"4"
    } else {
        input.innerHTML = input.innerHTML+4;
        side2 = side2+"4"
    }
})
three.addEventListener("click", function three() {
    if (operationSelected == "") {
        input.innerHTML = input.innerHTML+3;
        side1 = side1+"3"
    } else {
        input.innerHTML = input.innerHTML+3;
        side2 = side2+"3"
    }
})
two.addEventListener("click", function two() {
    if (operationSelected == "") {
        input.innerHTML = input.innerHTML+2;
        side1 = side1+"2"
    } else {
        input.innerHTML = input.innerHTML+2;
        side2 = side2+"2"
    }
})
one.addEventListener("click", function one() {
    if (operationSelected == "") {
        input.innerHTML = input.innerHTML+1;
        side1 = side1+"1"
    } else {
        input.innerHTML = input.innerHTML+1;
        side2 = side2+"1"
    }
})

zero.addEventListener("click", function zero() {
    if (operationSelected == "") {
        input.innerHTML = input.innerHTML+0;
        side1 = side1+"0"
    } else {
        input.innerHTML = input.innerHTML+0;
        side2 = side2+"0"
    }
})

changeSign.addEventListener("click", function changeSign() {
    if (input.innerHTML[input.innerHTML.length-1] !== " ") {
    let checkkside1 = side1[0];
    let checkkside2 = side2[0]
    let checside1 = side1.split("")
    if (checkkside1 !== "+" && checkkside1 !== "-" && checkkside1 !== "*" && checkkside1 !== "/") {
    if (side2 === "") {
        if (operationSelected == "") {
            if (side1 !== "") {
                if (checside1[0] !== "-") {
            let sidee1 = side1.split("");
            sidee1.splice(0, 0, "-")
            side1 = sidee1.join("")
            input.innerHTML = side1; }
    }
} else {
    let sidee2 = side2.split("");
            sidee2.splice(0, 0, "-")
            side2 = sidee2.join("")
            input.innerHTML = side2;
}

} else {
    let sidee2 = side2.split("");
    sidee2.splice(0,0, "-")
    side2 = sidee2.join("")
    input.innerHTML = side2;
} }
    else {
        side1 = side1.substring(1);
        input.innerHTML = input.innerHTML.substring(1);
    }
    }}
)

plus.addEventListener("click", function plus() {
    if (operationSelected !== "plus") {
        if (operationSelected == "minus" || operationSelected == "multiply" || operationSelected == "divide") {
            operationSelected = "plus";
            input.innerHTML = input.innerHTML.substring(0, input.innerHTML.length-3)
            input.innerHTML = input.innerHTML+" + "

   }
    if (operationSelected == "") {
        if (input.innerHTML !== "") {
    let side1 = input.innerHTML;
    input.innerHTML = input.innerHTML+" + ";
    operationSelected = "plus";
}}}
})
minus.addEventListener("click", function minus() {
    if (operationSelected !== "minus") {
        if (operationSelected == "plus" || operationSelected == "multiply" || operationSelected == "divide") {
            operationSelected = "minus";
            input.innerHTML = input.innerHTML.substring(0, input.innerHTML.length-3)
            input.innerHTML = input.innerHTML+" - "

   }
    if (operationSelected == "") {
      if (input.innerHTML !== "") {
  let side1 = input.innerHTML;
  input.innerHTML = input.innerHTML+" - ";
  operationSelected = "minus";
}}}})
x.addEventListener("click", function multiply() {
    if (operationSelected !== "multiply") {
        if (operationSelected == "plus" || operationSelected == "minus" || operationSelected == "divide") {
            operationSelected = "multiply";
            input.innerHTML = input.innerHTML.substring(0, input.innerHTML.length-3)
            input.innerHTML = input.innerHTML+" x "

   }
   if (operationSelected == "") { 
   if (input.innerHTML !== "") {
    input.innerHTML = input.innerHTML+" x ";
    operationSelected = "multiply";
    
}}}})
divide.addEventListener("click", function divide() {
    if (operationSelected !== "divide") {
        if (operationSelected == "plus" || operationSelected == "minus" || operationSelected == "multiply") {
            operationSelected = "divide";
            input.innerHTML = input.innerHTML.substring(0, input.innerHTML.length-3)
            input.innerHTML = input.innerHTML+" / "

   }
   if (operationSelected == "") { 
    if (input.innerHTML !== "") {
    input.innerHTML = input.innerHTML+" / ";
    operationSelected = "divide";
    
}}}})

DEL.addEventListener("click", function() {
    if (side2 === "") {
        if (operationSelected === "") {
            side1 = side1.substring(0, side1.length-1);
            input.innerHTML = input.innerHTML.substring(0, input.innerHTML.length-1)
        } else if (operationSelected !== "") {
            operationSelected = "";
            input.innerHTML = input.innerHTML.substring(0, input.innerHTML.length-3)
        }
    } else {
        side2 = side2.substring(0, side2.length-1);
        input.innerHTML = input.innerHTML.substring(0, input.innerHTML.length-1)
    }
})

dot.addEventListener("click", function() {
    let check = input.innerHTML.split("")
    if (check[check.length-1] !== ".") { 
        if (operationSelected.length == 0) {
            side1 = side1+"."
            input.innerHTML = input.innerHTML+"."
        } else if (side2.length !== 0) {
        side2 = side2+".";
        input.innerHTML = input.innerHTML+"."
    }
}
})

equal.addEventListener("click", function equal() {
    if (side1.length > 0 && side2.length > 0 && operationSelected !== "") {
        if (operationSelected == "plus") {
        input.innerHTML = Number(side1) + Number(side2);
        side1 = input.innerHTML
        side2 = "";
        operationSelected = "";
     } else if (operationSelected == "minus") {
        input.innerHTML = Number(side1) - Number(side2);
        side1 = input.innerHTML
        side2 = "";
        operationSelected = "";
    }  else if (operationSelected == "multiply") {
        input.innerHTML = Number(side1) * Number(side2);
        side1 = input.innerHTML
        side2 = "";
        operationSelected = "";
    }  else if (operationSelected == "divide") {
        input.innerHTML = Number(side1) / Number(side2);
        side1 = input.innerHTML
        side2 = "";
        operationSelected = "";
}}})

console.log("idk")
