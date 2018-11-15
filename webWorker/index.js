var worker = new Worker('./work.js');

worker.postMessage({ user: 'master', data: 'hello worker' });

worker.addEventListener('message', e => {
  console.log('master receive worker data:', e.data);

  // worker.terminate();
});

worker.addEventListener('error', e => {
  console.log('test error', e);
});
