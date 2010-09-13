var Token = require("../token");
exports.implicit_vars = function(stream) {
  var stack = [], variable, current, closure
  
  stream.each(function(token) {    
    if(!token.assign) return 
    variable = token.prev.text
    if(!/^[A-Za-z0-9$_]*$/.test(variable)) return
    if(token.prev.prev.operator) return
    current = closure = this.findClosure()
    var found = false
    
    while(current) {
      if(current.vars[variable] || current.args[variable]) {
        found = true
        break
      }
      current = current.parent
    }
    
    if(!found) closure.vars[variable] = true
  })
  

}




