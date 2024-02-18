const student = {
    name: "Alice",
    age: 22,
    major: "Computer Science",
    GPA: 3.8,
    isEnrolled: true
};

function displayStudentInfo(studentObj) {
    for (let property in studentObj) {
        console.log(`Property: ${property}, Value: ${studentObj[property]}`);
    }
}

// Call the function with the student object as a parameter
displayStudentInfo(student);