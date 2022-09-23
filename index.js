const express = require('express')
const app = express()
const { resolve } = require('path');
const { readFile } = require('fs');
const port =  process.env.production ? (process.env.PORT || 3000) : 9000; 


app.get('/', (req, res) => {

  if (!req?.query?.src) res.send("Hello");

  readFile(resolve(__dirname, "./static/index.html"),  (c, t) => {
    
    let html = t.toString().replace(/{{src}}/gi, req?.query?.src);
    res.setHeader("content-type", "text/html");
    res.send(html);
  })
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
})