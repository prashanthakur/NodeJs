var fs = require('fs');

//it will create and override the content
fs.writeFile('MyCode.txt',"My Code from NodeJs",function(err){
    if(err) throw err;
    console.log('File Is Created')
})
//to read a file
fs.readFile('MyCode.txt','utf-8',(err,data)=>{
    if(err) throw err;
    console.log(data)
})
//to delete a file
fs.unlink('Mycode.txt',(err) => {
    if(err) throw err
    console.log('File Deleted')
})