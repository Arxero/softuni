const url = require('url')
const fs = require('fs')
const path = require('path')

module.exports = (req, res) => {
    req.pathname = req.pathname || url.parse(req.url).pathname

    if ((req.pathname == '/' || req.pathname == '/home') && req.method == 'GET') {
        let filePath = path.normalize(path.join(__dirname, '../views/home.html'))

        fs.readFile(filePath, (err, data) => {
            if (err) {
                console.log(err);
                res.writeHead(404, {
                    'content-type': 'text/plain'
                })
                res.write('404 Not Found')
                res.end()
                return
            }

            res.writeHead(200, {
                'content-type': 'text/html'
            })
            res.write(data)
            res.end()
        })
    } else {
        // res.writeHead(404, {
        //     'content-type': 'text/plain'
        // })
        // res.write('Something went wrong :(')
        // res.end()
        return true
    }
}