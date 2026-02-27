
let aviso = document.getElementById('aviso')
aviso.addEventListener('animationend', ()=> {
    aviso.remove()
})


let titulo = document.getElementById('ti')
let tex = document.getElementById('tex')
let con = 0
function prox() {
    con++
    if(con == 0){
        titulo.innerText = 'Atendimento Exclusivo'
        tex.innerHTML = 'Cada cliente é atendida com atenção e cuidado, buscando entender seu estilo e suas expectativas para entregar um resultado personalizado.'
    }if(con == 1){
        titulo.innerText = 'Profissional Qualificada'
        tex.innerHTML = 'Com cursos de especialização e constante atualização, Mariana aplica técnicas modernas para garantir um acabamento impecável.'   
    }if(con == 2){
        titulo.innerText = 'Foco na Satisfação'
        tex.innerHTML = 'O objetivo é que você saia do atendimento se sentindo mais confiante, bonita e satisfeita com o resultado.'   
    }if(con == 3){
        titulo.innerText = 'Cuidado com os Detalhes'
        tex.innerHTML = 'Desde a escolha dos produtos até o acabamento final, tudo é feito com atenção para garantir qualidade e durabilidade.'  
        con = -1
    }

}

