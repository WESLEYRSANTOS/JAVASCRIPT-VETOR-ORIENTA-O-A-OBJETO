function calcular(){
    
    //declarar vetor
    let vetor = []

    //entrada de dados
    for(let i = 0; i < 5; i++){
        let objeto = new Object()
        objeto.salario = Number(prompt(`Informe Salario`))
        objeto.idade = Number(prompt(`Informe Idade`))
        objeto.filhos = Number(prompt(`Informe número de filhos`))
        objeto.sexo = prompt(`Informe M para Masculino e F para feminino`).toUpperCase()
        // insere objeto no vetor
        vetor.push(objeto)
    }
    // processamento - a partir de agora os dados sao obtidos apenas no vector
    let somasalario = 0
    let somafilhos = 0
    let maiorsalario= vetor[0].salario // inicia o maior salario
    let quant = 0 // quantidade salario de mulheres superior a mil
    for(let i = 0; i < 5; i ++){
        //soma salario
        somasalario += vetor[i].salario
        //soma filhos
        somafilhos += vetor[i].filhos
        //maior salario
        if(vetor[i].salario > maiorsalario){
            maiorsalario = vetor[i].salario
        }
        if(vetor[i].sexo == "F" && vetor[i].salario > 1000){
            quant ++
        }
    }
    // mostrar resultados
    document.getElementById("result").innerHTML = ` A media dos salarios é de ${somasalario/vetor.length}<br>
    A media dos filhos é de ${somafilhos/vetor.length} <br> 
    O maior salario é ${maiorsalario} <br>
    E a % de mulheres com salario superior a 1000 R$ é ${quant/vetor.length*100}% `

  
}