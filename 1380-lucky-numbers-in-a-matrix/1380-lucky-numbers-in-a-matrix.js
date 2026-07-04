var luckyNumbers = function(matrix) {
    let result = [];

    for (let i = 0; i < matrix.length; i++) {

        
        let min = matrix[i][0];
        let col = 0;

        for (let j = 1; j < matrix[i].length; j++) {
            if (matrix[i][j] < min) {
                min = matrix[i][j];
                col = j;
            }
        }

        let isLucky = true;

        for (let k = 0; k < matrix.length; k++) {
            if (matrix[k][col] > min) {
                isLucky = false;
                break;
            }
        }

        if (isLucky) {
            result.push(min);
        }
    }

    return result;
};