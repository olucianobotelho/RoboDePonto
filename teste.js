let fs = require('fs');

 
fs.watch('C:/Users/luciano.paiva/Downloads/',(changeType,file)=>{
  
  // AQUI É GERADA A DATA DO DIA E CONVERTIDA EM STRING E DEVIDAMENTE FORMATADA
   data = new Date()
   let stringdate =((data.getDate() )) + "-" + ((data.getMonth() + 1))+ "-" + data.getFullYear()
   dataconvertida= stringdate.toString()
   
  //  AQUI É GERADA A VARIAVEL PARA NOMEAR O ARQUIVO INCLUINDO A DATA DO DIA
   nometeste= "Arquivo de Ponto "+`${dataconvertida}`
    console.log(`Arquivo ${file} localizado`)
   // AQUI O ARQUIVO BAIXADO É SELECIONADO E APLICADO A ALTERAÇÃO DE NOME INCLUINDO O FORMATO TXT
   setTimeout(() => {

    arquivo = `C:/Users/luciano.paiva/Downloads/${file}`

    fs.rename(arquivo, "C:/Users/luciano.paiva/Documents/Robô de ponto/arquivo de teste.txt" , function(){
       
        // AQUI ELE INFORMA O ARQUIVO QUE FOI RENOMEADO
         console.log('Arquivo renomeado foi: ', file);
    })
  },1000000)
  
  
     

   
})