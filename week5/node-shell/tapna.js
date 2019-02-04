const colors = require('colors/safe');
const logSymbols = require('log-symbols');
const stdin = process.openStdin();
let testData = ''
stdin.on('data', chunk => {
    testData += chunk;
})
stdin.on('end', () => {
    let data = testData.split('#').map(line => line.split('\n'));
    data.shift()
    handleData(data)
})
const handleData = data => {
    data.forEach(element => {
        element.forEach(ele => {
            if (ele == element[0] && !ele.includes('tests ') && !ele.includes('pass ') && !ele.includes('fail ') && !ele.includes('ok')) {
                process.stdout.write(colors.grey.underline('\n' + ele + '\n\n'))
            }
            if (ele.startsWith('ok')) {
                handleOk(ele);
            }
            else if (ele.startsWith('not ok')) {
                handleNotOk(element);
            }
            else if (ele === '') {
                element = element.slice(element.indexOf(ele))
            } else if (ele.includes('tests ')) {
                process.stdout.write(logSymbols.info + colors.blue(ele + '\n'))
            } else if (ele.includes('pass ')) {
                process.stdout.write(logSymbols.success + colors.green(ele + '\n'))
            } else if (ele.includes('fail')) {
                process.stdout.write(logSymbols.error + colors.red(ele + '\n'))
            }
        })
    });

}
const handleOk = data => {
    data = data.slice(5)
    process.stdout.write('\t' + logSymbols.success + colors.green(`${data}\n`));

}
const handleNotOk = data => {
    data[1] = data[1].slice(9)
    process.stdout.write('\t' + logSymbols.error + colors.red(`${data[1]}\n`));
    process.stdout.write(colors.red(`\t${data[3]}\n`));
    process.stdout.write(colors.red(`\t${data[4]}\n`));
    process.stdout.write(colors.red(`\t${data[5]}\n`));
    process.stdout.write(colors.red(`\t${data[6]}\n\n`));
}