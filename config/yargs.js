const argv = require('yargs')
                    .option('b', {
                         alias:'base',
                         type : 'number',
                         demandOption: true,
                         describe: 'Es la base de la tabla de multipicar'
                    })
                    .check((argv, options) => {
                         if(isNaN(argv.b)){
                              throw 'La base tiene que ser un número'
                         }
                         return true
                    })
                    .option('l', {
                         alias:'listar',
                         type:'boolean',
                         default: false,
                         describe:'Muestra la tabla en consola'
                    })
                    .option('h', {
                        alias: 'hasta',
                        type:'number',
                        default:20,
                        describe:'Valor máximo a generar en la tabla'
                    })
                    .check((argv,options) => {
                        if(isNaN(argv.h)){
                            throw 'El valor a generar tiene que ser un número'
                       }
                        if(argv.h >20){
                            throw 'No puede ser mayor a 20'
                        }
                       return true
                    })
                    .argv;

module.exports= argv;