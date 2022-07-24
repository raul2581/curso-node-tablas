const fs= require('fs');
const colors = require('colors');

const crearArchivo = async( base = 5, listar = false, hasta =20) => {
    
    try {
      
       

        let salida= '';

        for(let i=1; i<=hasta ; i++ ){
        salida +=`${ base } X ${i} = ${base*i}\n`;
        };

        if(listar){
            console.log(colors.green('====================='));
            console.log('   Tabla del: ', base);
            console.log(colors.bgCyan('====================='));
            console.log(salida);
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        return(`tabla-${base}.txt`);
    } catch (error) {
        throw err;
    }

    
};

module.exports={
    crearArchivo
};
