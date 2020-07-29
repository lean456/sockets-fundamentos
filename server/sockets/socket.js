const {io} = require('../server')


/**
 * @param client 
 * 
 * recibe toda la data de la pc conectada
* */


io.on('connection', (client) => {
    console.log('Uusuario Conectado');

    client.emit('enviarMensaje', {
        usuario:'Administrador',
        data: 'Welcome to my app'
    })

    client.on('disconnect', ()=> {
        console.log('usuario desconectado');
    })
//Escuchar el cliente
    client.on('enviarMensaje', (data, callback) => {
        console.log(data);
        client.broadcast.emit('enviarMensaje', data)
        // if(data.usuario) {

        //     callback({
        //         ok: true,
        //         message: 'Recibido'
        //     });
        // } else {
        //    callback({
        //        ok:false,
        //        message:'Fallo'
        //    }) 
        // }
    })

});


