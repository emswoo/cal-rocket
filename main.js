function btn1() {
    var input1 = document.getElementById("input1");
    var input2 = document.getElementById("input2");
    var box1 = document.getElementById("box-total");
    var total1 = parseFloat(input1.value) + parseFloat(input2.value);
    box1.innerHTML = total1;
    }

function btn2() {
    var input1 = document.getElementById("input1");
    var input2 = document.getElementById("input2");
    var box1 = document.getElementById("box-total");
    var total1 = parseFloat(input1.value) - parseFloat(input2.value);
    box1.innerHTML = total1;
}

function btn3() {
    var input1 = document.getElementById("input1");
    var input2 = document.getElementById("input2");
    var box1 = document.getElementById("box-total");
    var total1 = parseFloat(input1.value) * parseFloat(input2.value);
    box1.innerHTML = total1;
}

function btn4() {
    var input1 = document.getElementById("input1");
    var input2 = document.getElementById("input2");
    var box1 = document.getElementById("box-total");
    var total1 = parseFloat(input1.value) / parseFloat(input2.value);
    box1.innerHTML = total1;
}