function schoolRegister(input) {
    let students = {};
    input.forEach(line => {
        let tokens = line.split(', ');
        let name = tokens[0].split(': ')[1];
        let nextGrade = Number(tokens[1].split(': ')[1]) + 1;
        let score = Number(tokens[2].split(': ')[1]);

        if (score >= 3) {
            if (!students.hasOwnProperty(nextGrade)) {
                students[nextGrade] = {
                    listStudents: [],
                    totalScore: 0,
                    averageScore: 0
                };
            }
            students[nextGrade].listStudents.push(name);
            students[nextGrade].totalScore += score;
            students[nextGrade].averageScore = students[nextGrade].totalScore / students[nextGrade].listStudents.length;
        }
    });
    Object.entries(students)
        .sort((a, b) => a - b)
        .forEach (grade => {
            console.log(`${grade[0]} Grade`);
            console.log(`List of students: ${grade[1].listStudents.join(', ')}`);
            console.log(`Average annual grade from last year: ${grade[1].averageScore.toFixed(2)}\n`);
        });
}
schoolRegister(["Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
    "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
    "Student name: George, Grade: 8, Graduated with an average score: 2.83",
    "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
    "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
    "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
    "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
    "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
    "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
    "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
    "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
    "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00"]
)