module.exports = function(app){
    var request = require("request");

    var options = { method: 'POST',
        url: 'https://auth.truelayer.com/connect/token',
        headers:
         { 'Postman-Token': '12065a9d-e221-4061-a3df-1c586f02c4bd',
           'cache-control': 'no-cache' },
        form:
         { grant_type: 'refresh_token',
          client_id: 'teste-dc4bcf',
          client_secret: '99259b21-ef50-4d6e-9f60-6beb46ae05b0',
          refresh_token: '7fbd3277d8603af7771e6e703ce27e7cfcb9bea493bc695cf63e25c272bb8d17',
          undefined: undefined } };

        request(options, function (error, response, body) {
        if (error) throw new Error(error)
        else{
            app.get('/refresh_token', function(req, res){
                obj = JSON.parse(body);
                res.send(obj);
            })
        }

        console.log(body);
    });

}


