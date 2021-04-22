const express = require('express');
const app = express();
const port = 3000;

app.get('/',(req,res) => res.send('Hello Word'))

//app.post('/',(req,res) => res.send('Hello Word Post'))

app.listen(port, () => {
 console.log("App Listen port teste 123");
});