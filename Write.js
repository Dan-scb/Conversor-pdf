const fs = require('fs')
const util = require('util')

class Write{
    constructor(){
        this.writer = util.promisify(fs.writeFile)
    }

    async Write(fileName, data){
        try{
            await this.writer(fileName, data)
            return true
        }catch(err){
            return false
        }
    }
}

module.exports = Write