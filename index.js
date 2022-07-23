

function cal(newValue){
    document.getElementById('myResult').value += newValue;
}

function remove(){
    document.getElementById('myResult').value = ' ';
}

function Ans(){
    var a = document.getElementById('myResult').value;

    var b = eval(a);
    document.getElementById('myResult').value = b;
}