

export default function matrix(sequence) {


    let res = []


    res = sequence.split('\n').map(r => r.split(' ').map(Number))
    let finalArray = new Array(res.length)

    for (let j = 0; j < finalArray.length; j++) {
        finalArray[j] = new Array();
    }

    for (let i = 0; i < res.length; i++) {
        for (let el = 0; el < res[i].length; el++) {
            console.log(res[el][i])
            finalArray[i].push(res[el][i])

        }
    }
    let obj = {
        rows: res,
        columns: finalArray
    }

    // console.log(obj)
    return obj
}



// [[1, 2][3, 4]]
// [[1, 3][2, 4]]