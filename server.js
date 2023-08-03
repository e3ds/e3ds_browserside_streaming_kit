const express = require("express");

const app = express();
const PORT = process.env.PORT || 4000;

const dir = __dirname ;
app.use(express.static(dir));

app.listen(PORT, () => {
    console.log("Application started and Listening on port " + PORT);
});

app.get("/", (req, res) => {
    res.sendFile(dir + "/full_demo.html");
})
