const argv = require('yargs')
.command('crear','crea una tarea por realizar',{
    descripcion:{
        demand: true,
        alias:'d',
        desc:'Descripcion de la tarea'
    }
})
.command('listar','lista las tareas a realizar',{
    
})
.command('actualizar','actualiza el estado de una tarea',{
    descripcion:{
        alias:'d'
    },
    completado:{
        alias:'c',
        default: true
    }
})
.command('borrar','borra una tarea por hacer',{
    descripcion:{
        alias:'d'
    }
})
.help()
.argv;

module.exports = {
    argv
}