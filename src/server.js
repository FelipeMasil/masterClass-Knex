const app = require('express')()
const port = 3333

app.listen(port, ()=>{
    console.log(`Backend running on ${port}`)
})