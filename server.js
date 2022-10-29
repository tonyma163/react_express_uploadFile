var express = require("express");
var cors = require("cors");
var multer = require("multer");

var app = express();

app.use(cors())
app.use('/public', express.static('public'));

const upload = multer({ dest: "uploads/" });

app.post('/uploadFile', upload.array("file"), function(req, res, next){
    console.log(req.body);
    console.log(req.files);
    res.json({ message: "Successfully uploaded file" });
});


var server = app.listen(3001, function () {

    var port = server.address().port
   
    console.log("listening to %s", port)
   
})