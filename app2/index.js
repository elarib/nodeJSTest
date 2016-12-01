var XMLHttpRequest = require('xhr2');



function sendText(txt) {
  var xhr = new XMLHttpRequest();
  xhr.open('POST', 'http://localhost:8080/request', true);
  xhr.onload = function(e) {

    if (this.status == 200) {
    	console.log(this.status);
      	console.log(this.responseText);
    }
    else
    {
    	console.log(this.status);
    }
  };

  xhr.send(txt);
}


var str = '{"name": "SIR"}';
sendText(str);