const fs = require('fs');
const colors = require('colors');

const crearArchivo = async (base, limite, listar) =>{
    try{
        

        let salida = '';
        let consola = '';
        for (let index = 1; index <= limite; index++) {
            salida += (`${base} X ${index} = ${base*index}\n`);
            consola += (`${base} ${'X' .green} ${index} ${'=' .green} ${base*index}\n`);  
        }
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        const nombreArchivo = (`Tabla-${base}.txt`);
        
        if(listar){
            console.log("===============".red.bold);
            console.log(' Tabla del:'.red.bold, colors.blue.bold(base));//clg('tabla del: ', base)
            console.log("===============".red.bold);
            console.log(consola);
        }
        return nombreArchivo;
        
        
    }catch(error){
        throw error;
    }
    
}

module.exports = {
    crearArchivo
}