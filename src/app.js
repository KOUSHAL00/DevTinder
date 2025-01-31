const express = require('express');
const app = express();
const port = 3000;
//request handler: handling the incoming request and sending the response
//passing the control to the next middleware function

app.use('/', (req, res, next) => {
    if (req.originalUrl === '/') {
        res.send("welcome to my website");
    } else {
        next();
    }
});

// Route for home
app.use('/home', (req, res) => {
    res.send("welcome to home page");
});

// Route for about
app.use('/about', (req, res) => {
    res.send("welcome to about page");
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});