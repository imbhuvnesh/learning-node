const express = require('express');
const app = express();


app.use('/users', (req, res, next) =>
{
    res.send("<h1>The Users Page</h1>"); 
});
app.use('/', (req, res, next) =>
{
    res.send("<h1>Welcome!!</h1><a href='/users'>Users Page</a>"); 
});

// app.use('/', (req, res, next) =>
// {
//     console.log("hey!! I'm the first middleware.");
//     next();
// });
// app.use((req, res, next) =>
// {
//     console.log("hey!! I'm the second middleware");
//     next();
// });
// app.use('/', (req, res, next) =>
// {
//     res.send('<h1>Okay, I am done with logging!</h1>');
// });

app.listen(3000);