const Reader = require('./Reader')
const Processor = require('./Processor')
const Table = require('./Table')
const Html = require('./Html')
const Write = require('./Write')


let leitor = new Reader()
let escritor = new Write()


async function main(){
    let dados = await leitor.Read('./Planilha.csv')
    let dadosProcessados = Processor.Process(dados)

    let usuario = new Table(dadosProcessados)
    console.log(usuario.rowCount)
    console.log(usuario.coulumCount)

    let html = await Html.parser(usuario)

        escritor.Write(Date.now + ".html", html)
        escritor.Write(Date.now() + '.pdf', html)
    
}

main()