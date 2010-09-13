var Token = require("../token");
exports.multiline_strings = function(stream) {
  var reg = /\n/
  stream.each(function() {
    if(!this.string || !reg.test(this.text)) return
    
    this.text = this.text.replace(/(\\)?\n/g, function(str, escape) {
      return escape ? "\\\n" : "\\n\\\n"
    })
  })
}