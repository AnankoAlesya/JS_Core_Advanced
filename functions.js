function firstNotTheSame(array){
    for(let i = 1; i < array.length; i++){
        if (array[i] != array[i-1]){
            return array[i];
        }
    }
}

console.log(firstNotTheSame(['a', 'a', 'a', 'b', 'c','c','d']));