function checkNumber(data) {
    return new Promise((resolve, reject) => {
        if (typeof data !== 'number') {
            reject('Error');
        } else if (data % 2 !== 0) {
            setTimeout(() => {
                resolve('Odd');
            }, 1000);
        } else {
            setTimeout(() => {
                resolve('Even');
            }, 2000);
        }
    });
}
checkNumber(5)
    .then(result => console.log(result))
    .catch(error => console.log(error));

checkNumber(4)
    .then(result => console.log(result))
    .catch(error => console.log(error));

checkNumber('test')
    .then(result => console.log(result))
    .catch(error => console.log(error));
