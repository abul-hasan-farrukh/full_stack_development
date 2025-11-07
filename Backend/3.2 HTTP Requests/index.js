import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res)=> {
        res.send("<h1>Hello</h1>");        
});

app.get("/about", (req, res) => {
        res.send("<h2>About Me</h2><p>I am Abul Hasan Farrukh</>");
})

app.get("/contact", (req, res) => {
        res.send("<h2>Contact Us</h2>");
})

app.listen(port, () =>{
        console.log(`Server is up and running on ${port}`);
});