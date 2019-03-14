module.exports = function(app){
    var request = require("request");

    var options = { method: 'GET',
        url: 'https://api.truelayer.com/data/v1/accounts',
        headers:
        { 'Postman-Token': '9862d92a-3843-4514-bd3b-8e638c344f68',
           'cache-control': 'no-cache',
           Authorization: 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjE0NTk4OUIwNTdDOUMzMzg0MDc4MDBBOEJBNkNCOUZFQjMzRTk1MTAiLCJ0eXAiOiJKV1QiLCJ4NXQiOiJGRm1Kc0ZmSnd6aEFlQUNvdW15NV9yTS1sUkEifQ.eyJuYmYiOjE1NTI1NzA4MzYsImV4cCI6MTU1MjU3NDQzNiwiaXNzIjoiaHR0cHM6Ly9hdXRoLnRydWVsYXllci5jb20iLCJhdWQiOlsiaHR0cHM6Ly9hdXRoLnRydWVsYXllci5jb20vcmVzb3VyY2VzIiwiaW5mb19hcGkiLCJhY2NvdW50c19hcGkiLCJ0cmFuc2FjdGlvbnNfYXBpIiwiYmFsYW5jZV9hcGkiLCJjYXJkc19hcGkiLCJkaXJlY3RfZGViaXRzX2FwaSIsInN0YW5kaW5nX29yZGVyc19hcGkiLCJiZW5lZmljaWFyaWVzX2FwaSIsInByb2R1Y3RzX2FwaSJdLCJjbGllbnRfaWQiOiJ0ZXN0ZS1kYzRiY2YiLCJzdWIiOiJyU2V1MzRicUhJSmsyaHJ6WTRiMnRFTmpHQWpGVnRKSUpWcFYrYjRZTnlrPSIsImF1dGhfdGltZSI6MTU1MjU3MDcxMiwiaWRwIjoibG9jYWwiLCJjb25uZWN0b3JfaWQiOiJtb2NrIiwiY3JlZGVudGlhbHNfa2V5IjoiMDYzNDcxOWQ0MmExYWE5M2Y2ZjliOTdmZjU1YzAwODgzMzg4OWQwZDRiNjYyNmJmZTVhNWNhNDFmYjI1Yzk3OCIsInByaXZhY3lfcG9saWN5IjoiRmViMjAxOSIsInNjb3BlIjpbImluZm8iLCJhY2NvdW50cyIsInRyYW5zYWN0aW9ucyIsImJhbGFuY2UiLCJjYXJkcyIsImRpcmVjdF9kZWJpdHMiLCJzdGFuZGluZ19vcmRlcnMiLCJiZW5lZmljaWFyaWVzIiwicHJvZHVjdHMiLCJvZmZsaW5lX2FjY2VzcyJdLCJhbXIiOlsicHdkIl19.RAHx4hz5CUIsRTPzgumGozBI6rfsRCOMxMzGURJUnnXrDwgUNMdcXgLvbMEtpPiw4SajirYcOaXPx9920oiLgR42aszyugbuTgaYNmkmwlbPin-ZLLd-E29zNaszc2FtCZqlj4zOrS5X9By1el_ttYrI2E7e3AXEZEoQNlUPjTqn59APls6WTVXeoUCkWLr0e2r_S55c8yIFoY37QOhHs4uS3s-B2isW62g_KMHQ4cLJB6enK6QIF7aIMhzXAVR2fDZTwCVz7CcHrTHX8fWUie9NhUEboBbzdcDIvBmcP33rkBfbE5LLGc7dBYhWlZ5KDwMf7U9sK0gE7MWKp_xrGg' } };

        request(options, function (error, response, body) {
        if (error) throw new Error(error)
        else{
            app.get('/accounts', function(req, res){
                obj = JSON.parse(body);
                res.send(obj);
            })
        }
        console.log(body);
    });
}

