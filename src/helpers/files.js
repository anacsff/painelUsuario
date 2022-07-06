//Arquivo para auxiliar manipulação de arquivos

var fs = require("fs"); //file system
const files = {
    base64Encode: (file) => {
        return "data:image/gif;base64," + fs.readFileSync(file, "base64")
    }
};

module.exports = files;