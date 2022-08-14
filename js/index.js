/*Função validar*/
function validar(){
    var nome = document.getElementById('user')
    if(nome.value == ""){
        alert("Nome não informado");
        //input focus
        nome.focus();
    }
}