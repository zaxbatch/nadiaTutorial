const fs = require('fs');
const files = fs.readdirSync('.');
const html = `
<!DOCTYPE html>
<html>
<head><title>Index of /</title></head>
<body>
  <h1>Index of /</h1>
  <ul>
    ${files.map(f => `<li><a href="${f}">${f}</a></li>`).join('\n')}
  </ul>
<script type="text/javascript" src="script1.js"> 
</script></body>

</html>`;
fs.writeFileSync('index.html', html);