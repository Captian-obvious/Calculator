var setVal = null
function calcSequenceTerm(t,d,ft){
    return ft+d*(t-1)
}
function sequenceMain(){
    var str = document.getElementById("textInput1").value
    const tb = str.split(",")
    setVal = str
}
