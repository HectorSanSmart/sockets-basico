 //io es de la libreria que importamos
 //este io es el mismo objeto con el que inicializamos el socket
 let socket = io();

 //los on son para escuchar eventos
 //verificando si esta conectado
 socket.on('connect', function() {
     console.log('Conectado al servidor');
 });

 //perder conexion
 socket.on('disconnect', function() {
     console.log('Perdimos conexion');
 });

 //enviando informacion al server
 //los emits son para enviar informacion
 socket.emit('enviarMensaje', {
     usuario: 'Hector',
     mensaje: 'Hola mundo'
 }, (resp) => {


     console.log('Respuesta server: ', resp);
 });

 //escuchando la info que nos manda el server
 socket.on('enviarMensaje', (infoServer) => {
     console.log('Del servidor: ', infoServer);
 })