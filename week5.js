

class Student {
    
    constructor(names){
        this.names = names // I know how to make another class, but it broke the menu when i tried to use it :/
    }
}

class Menu {
    constructor() {
        this.studentList = []
    }

    start() {
        let selection = null
        while(selection !== "QUIT") {
            selection = prompt("What do you want to do?\n\nOptions: ADD, DELETE, VIEW, QUIT")
            if(selection === "ADD") {
                const names = prompt("Student name?")
                const newStudent = new Student(names)
                this.studentList.push(newStudent)
            }
            else if(selection === "DELETE") {
                const studentToDelete = prompt("Delete which student")
                const indexToDelete = this.studentList.findIndex(Student => Student.names === studentToDelete)
                this.studentList.splice(indexToDelete, 1)
            }
            else if(selection === "VIEW") {
                const studentListString = this.studentList.map(Student => Student.names).join("\n")
                alert("Students\n\n" + studentListString)
            }
        }
        alert("Goodbye!")
    }
}

const menu  = new Menu()
menu.start()