var https = require('https');
var data = '';
const req = https.get("https://www.boxingscene.com", (res) => {
  console.log(`STATUS: ${res.statusCode}`);
  console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
  res.setEncoding('utf8');
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    console.log('No more data in response.');
      var lookingfor = /(<a.*>.*compubox.*<\/a>)/gi;
  var found = data.match(lookingfor);
  console.log(found);
  });
});
req.on('error', (e) => {
  console.error(`problem with request: ${e.message}`);
});
// write data to request body
req.end();
