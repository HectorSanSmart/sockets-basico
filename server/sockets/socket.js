const { io } = require('../server');

//sabiendo cuando un usuario se conecta al server
io.on('connection', (client) => {
    console.log('Usuario conectado');
    //mandando info al cliente
    client.emit('enviarMensaje', {
        usuario: 'Admin',
        mensaje: 'Bienvenido'
    })

    //verificando cuando el cliente se desconecta de la aplicacion
    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });
    // //escuchar al cliente
    client.on('enviarMensaje', (mensaje, callbackCliente) => {
        // console.log(mensaje);
        // if (mensaje.usuario) {
        //     callbackCliente({
        //         resp: 'todo salio bien'
        //     });
        // } else {
        //     callbackCliente({
        //         resp: 'todo salio mal'
        //     });
        // }

        // callbackCliente();

        //enviando mensjae a todos los usuarios
        //broadcasr
        client.broadcast.emit('enviarMensaje', mensaje)

    })
})