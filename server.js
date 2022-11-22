
const path = require('path')

console.log("path " + path.__filename)

const decompress = require("decompress");
const http = require('http'); // or 'https' for https:// URLs
const fs = require('fs');
const url="http://oasis.caiso.com/oasisapi/SingleZip?queryname=SLD_REN_FCST&market_run_id=RTPD&startdatetime=20160415T07:00-0000&enddatetime=20160415T14:00-0000&resultformat=6&version=1"
const file = fs.createWriteStream("file1.zip");

const request = http.get(url, (response)=> {
  response.pipe(file)
  console.log(file.path)
  file.on('finish',()=>{
  
  decompress("file1.zip",'./').then(()=>{
    console.log("Decompressed")
    const files=fs.readdirSync("./").forEach(file => {
        console.log(file)
        var ext =file.split(".")
        console.log(ext[1])
        if(ext[1]=="csv"){
            console.log("vvhjkhkhjkhk")
            fs.rename(file, 'newFile.csv', (err) => {
                if (err) throw err;
                console.log('Rename complete!');
              });
        
        }
    

        if (fs.existsSync("./file1.zip")) {
            fs.unlinkSync("./file1.zip")
          }

    
    
      });
 
  }).catch(()=>{
    console.log("Decompress Error")
  })



  })
 
})

const files=fs.readdirSync("./").forEach(file => {
    console.log(file)
    var ext =file.split(".")
    console.log(ext[1])
    if(ext[1]=="csv"){
        console.log("vvhjkhkhjkhk")
        fs.rename(file, 'newFile.csv', (err) => {
            if (err) throw err;
            console.log('Rename complete!');
          });
    
    }

  });

// const express=require("express")
// const app= express()
// console.log("H")
// app.get('/', function(req, res){
//     //const file = `${__dirname}/upload-folder/dramaticpenguin.MOV`;
//     //console.log(file)
//     res.download('http://oasis.caiso.com/oasisapi/SingleZip?queryname=SLD_REN_FCST&market_run_id=RTPD&startdatetime=20160415T07:00-0000&enddatetime=20160415T14:00-0000&resultformat=6&version=1'); // Set disposition and send it.
//   });
  
  

// app.listen(3000)