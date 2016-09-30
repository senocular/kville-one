onmessage = function(event) {
  if (event.data.type === 'ping') {
    postMessage('Pinged: ' + event.data.value + ' from senocular!');
  }
};
