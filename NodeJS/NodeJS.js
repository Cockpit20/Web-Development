// console.log("Hello World");
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Pseudo Selectors & more designing</title>
      <style>
          .container{
              border: 2px solid red;
              background-color: rgb(223,245, 201);
              padding: 34px;
              margin: 34px auto;
              width: 500px;
          }
          a{
              text-decoration: none;
              color: black;
          }
          a:hover{
              color: black;
              background-color: darkgoldenrod;
          }
          a:visited{
              background-color: yellow;
          }
          a:active{
              background-color: darkblue;
          }
          .btn{
              font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
              font-weight: bold;
              background-color: crimson ;
              padding: 6px;
              border: none;
              cursor: pointer;
              font-size: 15px;
              border-radius: 4px;
          }
          .btn:hover{
              color: darkgoldenrod;
              background-color: aliceblue;
              border: 2px solid black;
          }
      </style>
  </head>
  <body>
      <div class="container" id="cont1">
          <h3>This is my heading</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, odit provident impedit reiciendis doloremque repudiandae explicabo incidunt. Aperiam harum voluptas tempora laborum fugiat.</p>
          <a href="https://www.whatsapp.com" class="btn">Read More</a>
          <button class="btn">Contact Us</button>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});