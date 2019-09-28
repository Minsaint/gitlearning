const EXPRESS = require('express');
const APP = EXPRESS();


APP.get('/', (req, res) => {
    res.send('./index.html');
})

APP.listen(4000);