const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 4000;
const app = express();
app.use(cors());
app.use(express.json());
const router = express.Router();
const file = require('file-system');
const fs = require('fs');
const readFile = require('./middleware/readFile.middleware');
const usersRoute = require('./routes/UserRoutes.js');
const e = require('express');


app.use("/user", usersRoute);


// check get route 
app.get('/', (req, res) => {
    res.send('Server is Running!');

})


// Port Connection 
app.listen(port, () => {
    console.log(`app running on port http://localhost:${port}`);
})