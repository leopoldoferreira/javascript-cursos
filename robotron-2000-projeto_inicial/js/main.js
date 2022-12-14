const robotron = document.querySelector("#robotron")

/*
robotron.addEventListener('click', function() { 
    //function() é uma função anônima, só é executada quando o gatilho é disparado, não tem como chamar em outro local
    console.log("cliquei no robô")
}) 
*/

// A forma mais simples de declarar função anônima é () =>
robotron.addEventListener('click', () => {
    //     console.log("cliquei no robô")
})

function hello() {
    console.log('robô clicado')
}