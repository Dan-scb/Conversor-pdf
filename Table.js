class Table{
    constructor(arr){
    this.header = arr[0]
    arr.shift()
    this.rows = arr
    }

    get rowCount(){
       return this.rows.length
    }

    get coulumCount(){
        return this.header.length
    }
}

module.exports = Table