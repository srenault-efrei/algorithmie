

export default function matrix(string) {

    let exceptRow = [ 1 ]
    let obj = {}
    let row = []

    if (string === "1") {
        row.push(exceptRow)
    }
    else{
        let firstSplits =  string.split("\n");
        console.log(firstSplits)
        for(const firstSplit of firstSplits){
        let secondSplit = firstSplit.split(' ');
        secondSplit =  secondSplit.map(Number)
        row.push(secondSplit)
        }
      
    }
  
    obj.rows = row
   // console.log(obj)
    return obj
}



// [[1, 2][3, 4]]
// [[1, 3][2, 4]]