const express = require("express");
const app = express();

app.use((req, res, next) => {
    // root middleware
    console.log("Root middleware");
    next();
});

// creating this middleware into a function
const checkToken = (req, res, next) => {
    const {token} = req.query;
    if (token === "887") {
        next();
    } else {
        res.status(401).send("Unauthorized");
    }
};

app.get("/api", checkToken, (req, res) => {
    res.send("data send from api");
});

app.get("/", (req, res) => {
    // Root route
    res.send("Root route");
});

app.get("/login", (req, res) => {
    // Login route
    res.send("Login route");
});

//Custom error handling middleware
app.get("/err",(req,res)=>{
    abcd =abcd;
})

app.use((err,req,res,next)=>{
    console.log("------- Error -------")
    next(err);
})

app.use((err,req,res,next)=>{
    console.log("------- Error2 middleware -------")
    next(err);
})

// path does not exist
// app.use((req, res) => {
//     res.status(404).send("Invalid path");
// });

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server is running at: http://localhost:${PORT}`);
});
