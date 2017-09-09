# Timestamp Microservice
### by Sam
### Endpoint: https://sam-timestamp-microserv.glitch.me/
### Accepts parameters in two formats: either Unix time or a "natural language date". 

### Returns object with two fields, "unix" and "natural", that reflect the input. 

### Code Samples:

> #### Unix Time as parameter

> `$.getJSON('https://sam-timestamp-microserv.glitch.me/1484870400', function(data) {
  console.log(data);
});`
   
> #### Natural Language date as parameter

> `$.getJSON('https://sam-timestamp-microserv.glitch.me/January 20, 2017', function(data) {
  console.log(data);
});`

> #### Both these snippets would print the same object:

> `{unix: 1484870400, natural: "January 20, 2017"}`

> #### An invalid input returns the following:

> `{unix: null, natural: null}`

### Demo

#### Try for yourself [here](https://codepen.io/sefields/pen/WEBMvK)!
