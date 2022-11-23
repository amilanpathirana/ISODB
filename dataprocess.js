const fs= require("fs")

const csvFilePath='./newFile.csv'
const csv=require('csvtojson')
csv()
.fromFile(csvFilePath)
.then((jsonObj)=>{
    console.log(jsonObj);

   const data = JSON.stringify(jsonObj)

    fs.writeFile('newFile.json', data, err => {
    if (err) {
      throw err
    }
    console.log('JSON data is saved.')
  })

})
 
// Async / await usage
