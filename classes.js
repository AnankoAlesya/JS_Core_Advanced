class Faculty {
    constructor(name) {
        this.name = name;
        this.departments = [];
    }

    addDepartment(department) {
        this.departments.push(department);
    }

    removeDepartment(department) {
        const index = this.departments.indexOf(department);
        if (index > -1) {
            this.departments.splice(index, 1);
        }
    }

    showAllDepartments() {
        return this.departments;
    }
}

class University {
    constructor(name) {
        this.university_name = name;
        this.faculties = [];
    }

    addFaculty(name) {
        this.faculties.push(new Faculty(name));
    }

    removeFaculty(name) {
        this.faculties = this.faculties.filter(faculty => faculty.name !== name);
    }

    showAllFaculties() {
        return this.faculties.map(faculty => faculty.name);
    }

    getFaculty(name) {
        return this.faculties.find(faculty => faculty.name === name);
    }
}

const grsu = new University("Grodno State University");
grsu.addFaculty("Faculty of Mathematics and Computer Science");
grsu.addFaculty("Faculty of Physics and Technology");
grsu.addFaculty("Faculty of Economics and Management");

let faculty = grsu.getFaculty("Faculty of Mathematics and Computer Science");
faculty.addDepartment(".NET Department");
faculty.addDepartment("JS Department");
faculty.removeDepartment(".NET Department");

console.log(grsu.showAllFaculties());
console.log(faculty.showAllDepartments());
