const express = require('express');
const cors = require('cors');
const authInfo = require('./secret.js');
const axios = require('axios');
const port = 10100;
const app = express();
app.use(cors());

app.get('/users', (req, res)=>{
    axios('https://ssb-dev-fep-01.azurewebsites.net/api/Sender', {
        headers: {
            'Content-type': 'application/json',
            'Authorization': 'Basic '+Buffer.from(authInfo).toString('base64')
        }
    }).then(r=>{
        res.send(r.data)
    })
})

app.listen(port, ()=>{
    console.log("listening to port", port);
})



/*
request sem virkar á api/delivery (til þess að fá businesskey)
{
  "senderOrderID": "77777777",
  "description": "hhhhh",
  "senderId": 9,
  "numberOfPackages": 1,
  "pickupAtDeliveryBranch": true,
  "box": false,
  "location": "hilla",
  "recipient": { "email": "eee@eee.is",
                  "phone": "7777777",
                  "name": "Testari"
                }

}
*/