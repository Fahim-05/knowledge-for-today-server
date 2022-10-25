const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');

app.use(cors());



app.get('/', (req, res) =>{
    res.send('Knowledge API running')
})

app.listen(port, () => {
    console.log('Knowledge for today server running on port', port);
})