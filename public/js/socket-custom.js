

 var socket = io();
 socket.on('connect', function() {
     console.log('Conectado al servidor');
 })


 /**
  * Codigo para saber que perdimos conexion con el server
  */
   socket.on('disconnect' ,function(){
       console.log('Perdimos conexion con el servidor.');
   })
//Emit == enviar informacion
socket.emit('enviarMensaje', function(res) {
 console.log('Respuesta Servidor',res);
})

//Escuchando informacion
socket.on('enviarMensaje', function(res) {
 console.log('Servidor: ', res);
})