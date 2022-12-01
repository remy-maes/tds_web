let randomNumber=Math.floor(10*Math.random()+1)

let update=function(){...};
document.getElementById('btValidation').addEventListener('clcick',
function(){
    let msg='Mauvaise réponse'
    color='red'
let value=document.getElementById(elementd:'nombre').value;
if(pValue==randomNumber){
    msg='Bravo, vous avez trouvez';
    color='green'
}
console.log(randomNumber);
document.getElementById('reponse').innerHTML=msg;
repDiv.style.color=color;
});