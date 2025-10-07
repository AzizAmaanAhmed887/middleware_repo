const express = require("express");
const app = express();
const expressError = require("./expressError");

// root middleware
app.use((req, res, next) => {
    console.log("Root middleware");
    next();
});

// creating checking token middleware into a function
const checkToken = (req, res, next) => {
    const {token} = req.query;
    if (token === "887") {
        next();
    } else {
        // throwing custom error using expressError class
        throw new expressError("Invalid token", 401);//(message, statusCode)
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
app.get("/err", (req, res) => {
    abcd = abcd;
})

app.use((err, req, res, next) => {
    let {statusCode = 500, message = "Internal server error"} = err; // Extracting the error object from the error parameter and assigning it to the statusCode and message variables even giving a default value if the error object does not have a statusCode or message property
    res.status(statusCode).send(message);
    // let {statusCode, message} = err;
    // res.status(statusCode).send(message); // send the error object to the client
})

// app.use((err, req, res, next) => {
//     console.log("------- Error2 middleware -------")
//     next(err);
// })

// path does not exist
// app.use((req, res) => {
//     res.status(404).send("Invalid path");
// });

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server is running at: http://localhost:${PORT}`);
});
