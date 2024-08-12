const express = require('express')
const app = express()
const port = 81

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/api',(req,res)=>{
    res.json({
        "Status":"success",
        message:"Successfully reached APi server"
    })
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})