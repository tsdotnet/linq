const fs = require("fs");
const file = './docs/.nojekyll';
if(!fs.existsSync(file))
    fs.writeFileSync(file,"");
