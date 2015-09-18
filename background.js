var CHECK_URL = 'https://www.google.com/images/cleardot.gif?';

function sendRequest() {
  console.log('sending http request...');
  var rnd = Math.random().toString(36).substr(2, 36);
  var url = CHECK_URL + rnd;
  fetch(url).then(function() {
    console.log('request done');
    scheduleRequest();
  }, function(err) {
    console.log('request failed');
    scheduleRequest();
  });
}

function scheduleRequest() {
  // Not the proper way of doing it as event page might get unloaded in the
  // meanwhile, but with the small timeout it's good enough for this demo.
  window.setTimeout(sendRequest, 2000);
}

sendRequest();

