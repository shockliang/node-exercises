const pResolve = Promise.resolve({ id: 1 });
pResolve.then(result => console.log(result));

const pReject = Promise.reject(new Error('reason for rejection...'));
pReject.catch(error => console.log('Error', error));
