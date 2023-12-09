const express = require('express');
const app = express();
const cors = require('cors')
const fs = require('fs').promises;
const port = 4215;
app.use(cors())
app.get('/cities', async  (req, res) => {
    try {
        const cityData = await fs.readFile('./server/Db/maps.json');
        const jsonData = JSON.parse(cityData);
        res.json(jsonData);
    } catch (error) {
        console.error('Error in file:', error);
        res.status(500).json({ error: 'internal server error' });
    }
});

app.listen(port, () => {
    console.log(`Server is running in port ${port}`);
});