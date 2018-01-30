
function myAdd(a, b) {
    var result = Number(a) + Number(b);
    return !isNaN(result) ? result : "Invalid Input";
};

// wrap up of the code above
function myLogicFunction() {
    var buttonAdd = document.getElementById('button-add');
    buttonAdd.addEventListener('click', function () {
        var inputA = document.getElementById('input-a');
        var inputB = document.getElementById('input-b');
        var label = document.getElementById('result');

        label.innerText = myAdd(inputA.value, inputB.value);
    });
};