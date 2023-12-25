const express = require("express");
const app = express();
app.use(express.static("Frontend"));
app.use(express.json());

app.post("/login", function (req, res) {
    res.json({ msg: 'Logged in successfully' });
    console.log("connected");
});

app.post("/signup", function (req, res) {
    res.json({ msg: "User created successfully" });
});

app.listen(3000, () => {
    console.log("Server is listening at port 3000");
});
