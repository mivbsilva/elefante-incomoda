var elefante = {
    quantidade: 10,
    incomodam(){
        let letra = '';
        let incomoda = [];
        for(let i = 1; i <= this.quantidade; i++){
            incomoda.push(' incomodam');
            if(i === 1){
                letra += `${i} elefante incomoda muita gente,\n`;
            }else if (i % 2 !== 0){
                letra += `${i} elefantes incomodam muita gente,\n`;
            }else if (i % 2 === 0){
                letra +=
                    `${i} elefantes${incomoda} muito mais.\n`;
            }
        }

        letra += `\n`;
        
        for(let i = this.quantidade; i >= 1; i--){
            if(i % 2 === 0){
                letra += 
                `${i} elefantes incomodam muita gente,\n`;    
            }else if(i === 1){
                letra += 
                `${i} elefante incomoda muito menos.\n`;
            }else if(i % 2 !== 0){
                letra +=
                `${i} elefantes${incomoda} muito menos.\n`;
            }
            incomoda.pop();
        }
        console.log(letra);
    }
};

elefante.incomodam();