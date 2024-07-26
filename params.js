const params = {
  server:{
     host: '127.0.0.1'
   , port: 4000
   , get url(){ return 'http://' + this.host + ':' + this.port } 
  },
}

module.exports = params

