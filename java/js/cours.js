let randomNumber=Math.floor(10*Math.random()+1)
function update() {
    let nom = document.forms[0].nom.value;
    let prenom = document.forms[0].prenom.value;
    let nomComplet = `${nom} ${prenom}`;
    document.getElementById('nomComplet').innerHTML = nomComplet;
    return false;
}
//document.getElementById('userForm').addEventListener('keyup', update);
document.getElementById('btValidation').addEventListener('click', update);