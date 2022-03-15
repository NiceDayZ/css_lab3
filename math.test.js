const { MathJS } = require("./math");
const { Matrix } = require("./matrix");

jest.mock('./matrix.js')

describe("Testing some math", () => {
    test("it should compute X", () =>{
        const A = [[2,0,0],[0,2,0],[0,0,2]];
        const B = [5,5,5];

        const mathService = new MathJS();

        const mockMatrixService = Matrix.mock.instances[0];
        const mockGetInverse = mockMatrixService.inverse;

        mockGetInverse.mockReturnValueOnce([[0.5, 0, 0],[0, 0.5, 0], [0, 0, 0.5]]);


        expect(mathService.Compute(A, B)).toEqual([2.5, 2.5, 2.5]);

        expect(mockGetInverse).toHaveBeenCalledTimes(1);
        expect(mockGetInverse).toHaveBeenCalledWith(A);
        
    })
})
