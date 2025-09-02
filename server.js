// Minimal HTTP redirect server for Railway
// 302 (temporary) so you can change the destination later without cache issues
const http = require('http');

const TARGET = process.env.TARGET_URL || 'hhttps://linktr.ee/callatenonoo';
const PORT = process.env.PORT || 3000;

http.createServer((req, res) => {
  res.statusCode = 302;
  res.setHeader('Location', TARGET);
  res.end();
}).listen(PORT, () => {
  console.log(`Redirecting every request to ${TARGET} on port ${PORT}`);
});
