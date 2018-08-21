var https = require('https');

const req = https.get("https://www.boxingscene.com", (res) => {
  console.log(`STATUS: ${res.statusCode}`);
  console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
  res.setEncoding('utf8');
  res.on('data', (chunk) => {
    console.log(`BODY: ${chunk}`);
  });
  res.on('end', () => {
    console.log('No more data in response.');
  });
});
req.on('error', (e) => {
  console.error(`problem with request: ${e.message}`);
});
// write data to request body
req.end();
