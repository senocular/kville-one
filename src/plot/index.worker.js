onmessage = function(event) {
  if (event.data.type === 'ping') {
    var msgs = [
      'How did I get here?',
      'Needs more boats.',
      'Too many pixels.',
      'Who took my rice?',
      'Are we there yet?',
      'Plug-ins were blocked on this page.',
      'Please try again later',
      'God? Is that you?',
      'here come dat boi! o shit waddup!',
      'You must be this tall to ride this ride.',
      'Some content may be inappropriate for adults.'
    ];
    var msg = msgs[Math.floor(Math.random() * msgs.length)];
    postMessage('Pinged: ' + event.data.value + ' from senocular! ' + msg);
  }
};
