const fs = require('fs');
const srcFile = process.argv[2];

const src = fs.createReadStream(srcFile);

src.on('data', (chunk, err) => {
    if (err) {
        console.log(err);
    } else {
        process.stdout.write(chunk);
    }
})