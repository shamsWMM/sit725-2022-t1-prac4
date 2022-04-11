const express = require('express')
const app = express()

//serve statically from a folder called public
app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

var port = process.env.port || 3000;

//has a callback
app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})

