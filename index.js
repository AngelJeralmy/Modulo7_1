const {registrar, leer} = require('./operaciones');

const argumentos = process.argv.slice(2);

if( argumentos[0] === "registrar"){
    registrar(argumentos[1],argumentos[2],argumentos[3],argumentos[4],argumentos[5]);
}
if(argumentos[0] === "leer"){
    const citas = leer();
    console.log(citas);
}
    
