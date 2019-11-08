
export default class GradeSchool {

    constructor() {
    this.students = null
    }

    getAllStudents() {
    //   /*  let size = this.size
    //     if (size === 0) {
    //         return true
    //     }*/
        return this.students
    }
}
let gradeSchool = new GradeSchool
console.log(gradeSchool.getAllStudents())


