function calcular(){
    // vetor
    let habitantes = []
  

    //entrada de dados

    for(let i = 0; i < 4; i++){
    //criar objeto
    let habitante = new Object()
    habitante.idade = Number(prompt(`Informe a idade do ${i + 1}° habitante`))
    do{
    habitante.sexo = prompt(`Informe o sexo do ${i + 1}° habitante sendo 
    M para Masculino 
    F para feminino`).toUpperCase()
    }
    while(habitante.sexo != "M" && habitante.sexo != "F")
        
    habitante.renda = Number(prompt(`Informe a Renda familiar do ${i + 1}° habitante`))
    habitante.filhos = Number(prompt(`Informe a quantidade de filhos do ${i + 1}° habitante`))
    

    //puchar para dendro do vetor
    habitantes.push(habitante)
    }
    let media = 0
    let menoridade = habitantes[0].idade
    let maioridade = habitantes[0].idade
    let auxrenda = 0
    let aux = 0
    
    
    for(let i = 0; i < 4; i ++){
       
        //quando tiver habitante somar renda
        if(habitantes[i].renda > 0){
            auxrenda = auxrenda + habitantes[i].renda
            media ++
        }
        
        //maior idade
        if(habitantes[i].idade > maioridade){
            maioridade = habitantes[i].idade
        }
        //menor idade
        else if(habitantes[i].idade < menoridade){
            menoridade = habitantes[i].idade
        }
        //quando sexo F com mais de 2 filhos e renda inferior a 600R$ faça
        if(habitantes[i].sexo == "F" && habitantes[i].filhos >= 2 && habitantes[i].renda < 600){
        aux ++
        }
    }
        //calculo media
        resul = auxrenda / media
        //
        document.getElementById("result").innerHTML =`A media de Salario entre os habitantes é = ${resul.toFixed(2)}R$<br>
        A maior idade entre os participantes é = ${maioridade}<br>
        A menor idade entre os participantes é = ${menoridade}<br>
        Quantidade Mulheres com mais de 2 filhos e renda inferior a 600R$ é = ${aux}<br>`
    
}