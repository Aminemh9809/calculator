let show = document.getElementById('input1');
let input1 = document.getElementById('input1');
let input2 = document.getElementById('input2');
let input3 = document.getElementById('input3');
let input4 = document.getElementById('input4');

let compteur = 0;
let compteur2 = 0;
function addToResult(value) {
    if (value === '.') {
        if (show.value === '') {
            show.value += '0';
        }
        if (!show.value.includes('.')) {
            show.value += value;
        }
    } else {
        show.value += value;
    }
}

function addPoint(value){
    show.value = value;
    console.log(show.value);
}
function add (value){
    document.getElementById('input2').value = value
    show = document.getElementById('input3');
    if (value === '.') {
        if (!show.value.includes('.')) {
            document.getElementById('input2').value = value
        }
    } else {
        document.getElementById('input2').value = value
    }
};
function calculateResult(){
    compteur2 = parseFloat(input3.value);
    compteur = parseFloat(input1.value);
    if(document.getElementById('input2').value == '+'){
        document.getElementById("input4").value = compteur + compteur2 
    }else if (document.getElementById('input2').value == '*'){
        document.getElementById("input4").value = compteur * compteur2 
    }else if (document.getElementById('input2').value == '-'){
        document.getElementById("input4").value = compteur - compteur2 
    }else if (document.getElementById('input2').value == '/'){
        document.getElementById("input4").value = compteur / compteur2 
    }
    if (input4.value === "Infinity"){
        input4.value = "Error 404"
    }
}
function clearResult(){
    show = document.getElementById('input1');
    document.getElementById('input1').value = "";
    document.getElementById('input2').value = "";
    document.getElementById('input3').value = "";
    document.getElementById('input4').value = "";
}