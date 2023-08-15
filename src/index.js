
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if(!arguments[0]) return []

    let result = [];
    for (let i = 0; i < matrix.length; i++ ){
        if (i%2!==0){
            result[i] = matrix[i].sort((a, b) => b - a);
        } else {
            result[i] = matrix[i]}
}

  return result.flat();
}

