let promise = new Promise(function(resolve, reject){ 
    resolve(5)
});

promise
.then(result => {
    return new Promise(function(resolve, reject){
        setTimeout(() => resolve(result**2), 3000);
    });
})
.then(result => {
    return new Promise(function(resolve, reject){
        setTimeout(() => resolve(result**2), 3000);
    });
})
.then(result => {
    console.log(result);
});
