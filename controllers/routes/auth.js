var request = require("request");
    module.exports = function(app){
    var options = { method: 'POST',
        url: 'https://auth.truelayer.com/connect/token',
        headers:
        { 'Postman-Token': '6efc98f6-9980-44e8-aaa3-d6592bc0eded',
           'cache-control': 'no-cache' },
        form:
        { grant_type: 'authorization_code',
          client_id: 'teste-dc4bcf',
          client_secret: '99259b21-ef50-4d6e-9f60-6beb46ae05b0',
          redirect_uri: 'https://console.truelayer.com/redirect-page',
          code: 'a92385e17506bbf5846eaefb0b597e13423d7ebe220bf4e7fa2ecae11e802998',
          undefined: undefined } };

    request(options, function (error, response, body) {
        if (error) throw new Error(error);
        else{
            app.get('/auth', function(req, res){
                obj = JSON.parse(body);
                res.send(obj)
            })
        }

        console.log(body);
    });

}



