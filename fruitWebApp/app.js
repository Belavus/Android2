const express = require('express')
const cors = require('cors')

const app = express()
const PORT = 3000

app.use(cors())

app.get('/countries', async (req, res) => {

    //get datra from external site:
    try {
        const apiRes = await fetch('https://www.fruityvice.com/api/fruit/all')

        if (!apiRes.ok) {
            throw new Error(`HTTP error status: ${apiRes.status}`)
        }
        const data = await apiRes.json()

        res.json(data)
    } catch (error) {
        console.error('fetch error')
        res.status(500).send('internal server error')
    }
})

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`)
})