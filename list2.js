function calcular(){
    // vetor
    let vetor = []
   
    //entrada de dados

    for(let i = 0; i < 50; i++){
     //criar objeto
    let habitante = new Object()
    do{
    habitante.sexo = prompt(`Informe o sexo do ${i + 1}° habitante sendo 
    M para Masculino 
    F para feminino`).toUpperCase()
    }
    while(habitante.sexo != "M" && habitante.sexo != "F")
        
    habitante.altura = Number(prompt(`Informe a altura do ${i + 1}° habitante`))
    habitante.idade = Number(prompt(`Informe a idade do ${i + 1}° habitante`))

    do{
    habitante.corolhos = prompt(`Insira a cor dos olhos do ${i + 1}° habitante sendo
    A para azul
    V para verde
    C para castanho`).toUpperCase()
    }
    while(habitante.corolhos != "A" && habitante.corolhos != "V" && habitante.corolhos != "C")

    //puchar para dendro do vetor
    vetor.push(habitante)
    }
    let auxidade = 0
    let maioridade = vetor[0].idade
    let media = 0
    let resul = 0
    let aux = 0
    let cont = 0
    
    for(let i = 0; i < 50; i ++){
        //quando olhos castanho altura maior 160mt
        if(vetor[i].corolhos == "C" && vetor[i].altura > 160){
            auxidade = auxidade + vetor[i].idade 
            media ++
        }
        
        //maior idade
        if(vetor[i].idade >= maioridade){
            maioridade = vetor[i].idade
        }
        //quando sexo F e idade entre 20 e 45 faca
        if((vetor[i].sexo =="F" && vetor[i].idade >= 20 && vetor[i].idade <= 45) || 
        (vetor[i].sexo == 'F' && vetor[i].olhos == 'V' && vetor[i].altura < 1.70)) {
        aux ++
        }
        if(vetor[i].sexo == "M"){
        cont ++  
        }
    }
        // operacoes

        //calculo media
        resul = auxidade / media
        //
        document.getElementById("result").innerHTML =`A media de idade de pessoas com olhos Castanhos e altura maior que 1,60 metros é = ${resul.toFixed(2)}<br>
        A maior idade entre os participantes é ${maioridade}<br>
        Quantidade Mulheres entre 20 e 45 anos é ${aux}<br>
        A quantidade de homens na pesquisa é = ${cont/vetor.length*100}%`
    
}