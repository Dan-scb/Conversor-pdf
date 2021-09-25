const ejs = require('ejs')

class Htmlparser{

     static async parser(table){
         return await ejs.renderFile('./tabel.ejs', {header: table.header, rows: table.rows})
     }
}

module.exports = Htmlparser