import params  from '../../params'
import * as server from '../../Red_Tetris/container/src/server/index'
server.create(params.server).then( () => console.log('not yet ready to play tetris with U ...') )
