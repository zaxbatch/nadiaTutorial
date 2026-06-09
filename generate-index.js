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
</body>
<script>
	alert('This is what a page with no index.html looks like. It's just a contents of the folder. Click on the links to see the content.');
</script>
</html>`;
fs.writeFileSync('index.html', html);