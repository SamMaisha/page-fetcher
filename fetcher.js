const request = require('request');
const fs = require('fs');

// handling input from terminal
const args = process.argv.slice(2);


const url = args[0]
const localFilePath = args[1];

// make http request
const requestFile = function(url) {
  request(url, (error, response, body) => {
    if (error) {
      console.log('error: ', error);
    }

    if (response.statusCode !== 200) {
      console.log('status code: ', response.statusCode)
    }



    //write to local file path
    fs.writeFile(localFilePath, body, err => {
      if (err) {
        console.log(err);
      }

      console.log(`Downloaded and saved ${body.length} bytes to ${localFilePath}`);

    })

  })
}

requestFile(url);





