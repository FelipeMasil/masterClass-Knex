const app = require('express')()
const port = 3333

const routes = require('./routes')

app.use(routes)



app.listen(port, ()=>{
    console.log(`Backend running on ${port}`)
})