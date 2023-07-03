function display(z){
    var a=z;
    document.getElementById("lb").value+=a;

}


function clr() {
    document.getElementById("lb").value = ""
}
function solve() {
    let x = document.getElementById("lb").value;
    let y = eval(x);
    document.getElementById("lb").value = y;
}

function back(){
    let x = document.getElementById("lb").value;
    var modifiedString = x.slice(0, -1);
    document.getElementById("lb").value = modifiedString ;
}