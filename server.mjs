console.log("this is express server")

import express from 'express';
const app = express ()
const port = 3006

app.get('/',(req, res) => {
    res.send('Hello World' + new Date())
})

app.get('/profile',(req, res) => {
    res.send('This is profile'   +  new Date())
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})



