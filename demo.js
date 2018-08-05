var args = process.argv[2];
if(args){//输入了文件/文件夹名
    var fs = require('fs');
    if(fs.existsSync(args)){//会覆盖
        console.log("err:dir exists");
    }
    else{
        let fs = require("fs");
        fs.mkdirSync(args);
        process.chdir(args);
        fs.writeFileSync("./index.html","\<!DOCTYPE\>\n\<title\>Hello\</title\>\n\<h1\>Hi\</h1\>");
        fs.mkdirSync("css");
        fs.mkdirSync("js");
        fs.writeFileSync("./css/style.css","h1{color: red;}");
        fs.writeFileSync("./js/main.js","var string = \"Hello World\"\nalert(string)");
    }
}
else{
    console.log("err:please input the name of dir");
}

