import express from 'express';

require("dotenv").config();
const app = express();

app.get('/ping', (req, res) => {
    try {
        res.send(req.headers);
        console.log(req.headers)
        return req.headers
    } catch (error) {
        res.send(error)
        console.log(error)
        return res.statusCode = 500
    }
})

app.get('/*', (_, res) => {
    res.send('404');
    res.statusCode = 404
    console.log(res.statusCode)
    return res.statusCode
})

app.listen(process.env.PING_LISTEN_PORT, () => {
    console.log('The application is listening on port : ' + process.env.PING_LISTEN_PORT);
})