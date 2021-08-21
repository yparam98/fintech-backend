const PORT = 5000;
const express = require ('express');
const app = express();

app.listen(PORT, () => {
    console.info('Express server listening on port ' + PORT)
});

app.get('/', (req, res) => {
    res.send('Express server') 
});

