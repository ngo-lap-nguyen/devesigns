var express = require('express');
var router = express.Router();

var public_key = 'd9ec07213ec8fae214c1f47cccd1db69';
var secret_key = 'c86be9a741307f0c1aeb9db98bfde243';

/* GET home page. */
router.post('/', function (req, res, next) {
    contactData = req.body;
    
    var mailjet = require ('node-mailjet')
    .connect(public_key, secret_key);
    
    var request = mailjet
        .post("send")
        .request({
            "FromEmail": "dev@devesigns.com",
            "FromName": "Devesigns",
            "Subject": "New message to Devesigns",
            "Text-part": "",
            "Html-part": "<h3>" + contactData.name + "</h3>" + contactData.email + "<br/>" + contactData.message,
            "Recipients": [
                {
                    "Email": "dev@devesigns.com"
                }
            ],
            "Headers": {
                "Reply-To": contactData.email
            }
        });

    request
        .then((result) => {
            console.log (result.body);
            return res.send('success');
        })
        .catch((error) => {
            console.log (error.statusCode);
            return res.status(400).send('error');
        });
});

module.exports = router;
