const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {  
    res.sendFile(__dirname + '/index.html')
});

app.post('/', (req, res) => {
  
  console.log(req.body.A1);
  console.log(req.body.A2);
  console.log(req.body.A3);
  console.log(req.body.A4);
  console.log(req.body.A5);

  res.sendFile(__dirname +  '/success.html');
});

app.listen(3000, () => {
  console.log("server is running at http://localhost:3000")
});
