//Calculator

function insert(num) {
    document.getElementById("textview").value += num;
}

function equals() {
    var exp = document.getElementById("textview").value;
    if (exp) {
        document.getElementById("textview").value = eval(exp);
    }
    return false;
}

function clr() {
    document.getElementById("textview").value = "";
}

function del() {
    var exp = document.formCal.textview.value;
    document.getElementById("textview").value = exp.substring(0, exp.length - 1);
}

function oneOverX() {
    document.getElementById("textview").value = 1 / document.getElementById("textview").value;
}
