class Processor{

    static Process(data){
        let rows = data.split('\r\n')
       let row = []

        rows.forEach(ro => {
            let dado = ro.split(',')
            row.push(dado)
        })
        return row
    }
}

module.exports = Processor