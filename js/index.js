var ans = 0
function set(op) {
    document.getElementById("display").value += op;
}
function sqrRoot() {
    var tempStore = document.getElementById("display").value;
    document.getElementById("display").value = eval(Math.sqrt(tempStore));
}
function asine() {
    var tempStore = document.getElementById("display").value;
    document.getElementById("display").value = eval(Math.asin(tempStore));
}

function acosine() {
    var tempStore = document.getElementById("display").value;
    document.getElementById("display").value = eval(Math.acos(tempStore));
}

function fLog() {
    var tempStore = document.getElementById("display").value;
    document.getElementById("display").value = eval(Math.log(tempStore));
}

function atangent() {
    var tempStore = document.getElementById("display").value;
    document.getElementById("display").value = eval(Math.atan(tempStore));
}

function tangent() {
    var tempStore = document.getElementById("display").value;
    document.getElementById("display").value = eval(Math.tan(tempStore));
}

function cosine() {
    var tempStore = document.getElementById("display").value;
    document.getElementById("display").value = eval(Math.cos(tempStore));
}

function sine() {
    var tempStore = document.getElementById("display").value;
    document.getElementById("display").value = eval(Math.sin(tempStore));
}

function setAns() {
    var display = document.getElementById("display");
    display.value += ans
}

function answer() {
    var Exp = document.getElementById("display");
    var Exp1 = Exp.value;
    var Exp2 = document.getElementById("displayB");
    var result = eval(Exp1);
    Exp2.value = result;
    ans = result;
    Exp.value = "";
}

function ce() {
    var elem = document.getElementById("display").value;
    var elem2 = document.getElementById("displayB").value;
    var length = elem.length;
    var length2 = elem2.length
    length--;
    var a = elem.substr(0, length);
    var b = elem.substr(0, length2);
    document.getElementById("display").value = a;
    document.getElementById("displayB").value = b;
}