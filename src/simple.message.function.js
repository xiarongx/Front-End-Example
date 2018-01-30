/**
* @param {string} targetId
*/
var getElementByIdSetContent = function (targetId) {
    var element = document.getElementById(targetId);
    if (!element) throw Error('Target element was not found');
    element.textContent = "Hello from a function";
}