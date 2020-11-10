const { exec } = require('child_process')
let ans;
module.exports.input = async (req, res) => {
    try {
        console.log(req.body.data);
        query = req.body.data;

        exec("python3 response.py '" + query +"'", (err, stdout, stderr) => {
            if(err) console.error(err)
            ans = stdout.toString();
            console.log(ans);
            console.log(stderr.toString())
            res.json({res: stdout.toString()})
        })

    }
    catch (err) {
        console.error(err);
    }
} 