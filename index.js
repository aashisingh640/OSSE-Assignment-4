const express = require('express');

const app = express();
app.use(express.json());

app.get('/', (req, res, next) => {
    res.send('Welcome to the OSSE Assignment 4');
});

app.all('*', (req, res, next) => {
    return res.status(404).json({ 
        success: false,
        message: `Can't find ${req.originalUrl}`
    })
})

app.listen(process.env.PORT || 3000, () => {
    console.log('service listening on ', process.env.PORT || 3000);
})