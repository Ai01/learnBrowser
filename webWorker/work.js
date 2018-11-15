self.addEventListener('message', e => {
  console.log('worker receive message:', e.data);

  self.postMessage({ user: 'worker', data: 'hello master' });

  importScripts('./work2.js');

  throw new Error('test');

  self.close();
});
