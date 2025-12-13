import express from 'express';


const app = express();

app.get('/', (req,res) => {
    res.send(`hello boss. The current time is ${new Date().toLocaleTimeString()}`);
});

//8000 wasn't working for some reason
app.listen(8000,() => {
    console.log('listening on http://localhost:8000');
});