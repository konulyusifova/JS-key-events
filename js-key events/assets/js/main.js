const input = document.getElementsByTagName("input");
const btnleft = document.getElementsByClassName("btnleft");
const btnright = document.getElementsByClassName("btnright");
const btnup = document.getElementsByClassName("btnup");
const btndown = document.getElementsByClassName("btndown");
const btncenter = document.getElementsByClassName("btncenter");

function myFunctionLeft() {
    btnleft.style.marginLeft = "5px"
}

function myFunctionRight() {
    btnright.style.marginRight = "5px"
}

function myFunctionCenter() {
    btncenter.style.marginTop = "0px"
    btncenter.style.marginLeft = "0px"
    btncenter.style.marginRight = "0px"
    btncenter.style.marginBottom = "0px"
}

function myFunctionUp() {
    btnup.style.marginTop = "5px"
}

function myFunctionDown() {
    btndown.style.marginBottom = "5px"
}