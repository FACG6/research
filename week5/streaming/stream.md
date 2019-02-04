#  Buffers and Streams:

## Buffer

 
A buffer contains data that is stored for a short amount of time, typically in the computer's memory (RAM). The purpose of a buffer is to hold data right before it is used. For example, when you download an audio or video file from the Internet, it may load the first 20% of it into a buffer and then begin to play. While the clip plays back, the computer continually downloads the rest of the clip and stores it in the buffer.

Buffering is used to improve several other areas of computer performance as well. Most hard disks use a buffer to enable more efficient access to the data on the disk. Video cards send images to a buffer before they are displayed on the screen (known as a screen buffer). Computer programs use buffers to store data while they are running. If it were not for buffers,  computers would run a lot less efficiently and we would be waiting around a lot more.

 ## What exactly are streams?

Streams are collections of data — just like arrays or strings. The difference is that streams might not be available all at once, and they don’t have to fit in memory. This makes streams really powerful when working with large amounts of data, or data that’s coming from an external source one chunk at a time.



## WHY STREAMS ?
Streams basically provide two major advantages using other data handling methods:
* **Memory efficiency:** you don’t need to load large amounts of data in memory before you are able to process it.

* **Time efficiency:** it takes way less time to start processing data as soon as you have it, rather than waiting till the whole data payload is available to start.

### DIFFERENT TYPES OF STREAMS 
   
#### There are four classes of streams:
* **Readable:** a stream you can pipe from, but not pipe into (you can receive data, but not send data to it). When you push data into a readable stream, it is buffered, until a consumer starts to read the data.

* **Writable:** a stream you can pipe into, but not pipe from (you can send data, but not receive from it).

* **Duplex:** a stream you can both pipe into and pipe from, basically a combination of a Readable and Writable stream.

* **Transform:** a Transform stream is similar to a Duplex, but the output is a transform of its input.

### AN EXAMPLE OF A STREAM

``` const http = require('http')
const fs = require('fs')
const server = http.createServer(function (req, res)
 {
  fs.readFile(__dirname + '/data.txt', (err, data) => {
    res.end(data)
  })
})
server.listen(3000) 
```
#### After  :

``` const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
  const stream = fs.createReadStream(__dirname + '/data.txt')
  stream.pipe(res)
})
server.listen(3000) 
```

## create read stream :

![](https://www.guru99.com/images/NodeJS/010716_0659_NodejsTutor13.png)

### output:

![](https://www.guru99.com/images/NodeJS/010716_0659_NodejsTutor14.png)

-----------------------------------------------

## our live code :

``` const fs = require('fs');
const srcFile = process.argv[2];

const src = fs.createReadStream(srcFile);

src.on('data', (chunk, err) => {
    if (err) {
        console.log(err);
    } else {
        process.stdout.write(chunk);
    }
})
``` 
