const argv = require('yargs')
            .options({
                'b':{
                    alias: 'base',
                    type: 'number',
                    demandOption: true,
                    default: 5,
                    describe: 'Número base para multiplicar'
                },
                'l': {
                    alias: 'limite',
                    type: 'number',
                    demandOption: true,
                    default: 10,
                    describe: 'Limite de la multiplicación'
                },
                'li': {
                    alias:'listar',
                    type: 'boolean',
                    default: false,
                    describe: 'Muestra la tabla en consola'
                }
            })
            .check( (argv, options) => {
                if( isNaN(argv.b)){
                    throw 'La base debe ser un numero';
                }else if(isNaN(argv.l)){
                    throw 'El limite debe ser un numero';
                }else{
                    return true;
                }
            })
            .argv;

module.exports = argv;