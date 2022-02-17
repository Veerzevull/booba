let div = document.createElement('div');
let textNode = document.createTextNode('Kto prochital tot sdoxnit');
document.body.append(div);
div.append(textNode);


div.classList.add('goose');
let goose = document.querySelector('.goose');
goose.style.margin = '50px';
function multi(){
    let inp1 = document.getElementById('inp_1').nodeValue,
    inp2 = document.getElementById('inp_2').nodeValue;
console.log(inp1*inp2);
}
