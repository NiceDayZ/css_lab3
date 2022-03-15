const { Matrix } = require("./matrix");

class MathJS{

    constructor(){
        this.matrixService = new Matrix();
    }

    Compute(A, B)
    {
        const result = [];
        const inverse = this.matrixService.inverse(A);

        for(let i = 0; i < inverse[0].length; i++){
            result.push(
                inverse[i].reduce((prev, current, index) => {
                    return prev + current*B[index];
                }, 0)
            );
        }

        return result;
    }
}

module.exports = {MathJS}