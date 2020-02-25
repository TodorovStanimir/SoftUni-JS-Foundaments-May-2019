function schoolGrades(input) {
    let studentGrades = {};
    input.forEach(line => {
        let nameStudent = line.split(' ')[0];
        let gradesStudent = line.split(' ').slice(1).map(Number);
        if (!(nameStudent in studentGrades)) {
            studentGrades[nameStudent] = [...gradesStudent];
        } else {
            studentGrades[nameStudent].push(...gradesStudent);
        }
    });
    Object.entries(studentGrades)
        .sort((a, b) => a[1].reduce((a, b) => a + b) / a[1].length - b[1].reduce((a, b) => a + b) / b[1].length)
        .forEach((student) => {
            console.log(`${student[0]}: ${student[1].join(', ')}`);
        });
}
schoolGrades(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6']);