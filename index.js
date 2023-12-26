const express = require("express");
const app = express();
app.use(express.static("Frontend"));
app.use(express.json());
const path = require("path");

app.post("/login", function (req, res) {
    res.sendFile("logmsg.html",{root:path.join(__dirname,"Frontend")},function(err){
        if(err){
            console.log(err);
        }
        else{
            console.log("file sent")
        }
    })
});

app.post("/signup", function (req, res) {
    res.sendFile("signupmsg.html",{root:path.join(__dirname,"Frontend")},function(err){
        if(err){
            console.log(err);
        }
        else{
            console.log("file sent")
        }
    })
});

app.listen(3000, () => {
    console.log("Server is listening at port 3000");
});
