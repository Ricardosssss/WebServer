const express = require("express")
const app = express()
const port = 5000

app.use(express.static("public/index_page"))

app.listen(port, () => {
    console.log(`Listening on port: ${port}`)
})