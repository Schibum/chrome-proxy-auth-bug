
function scheduleGetToken() {
  // Not the proper way of doing it as event page might get unloaded in the
  // meanwhile, but with the small timeout it's good enough for this demo.
  window.setTimeout(getAuthToken, 2000);
}

function getAuthToken() {
  console.log('getting token...');
  chrome.identity.getAuthToken({interactive: false}, function(result) {
    console.log('token result', result);
    scheduleGetToken();
  });
}

// sendRequest();
getAuthToken();

