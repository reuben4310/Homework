(function () {
    'use strict';

    class Student {

        constructor(firstName, lastName, age, grade) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
            this.grade = grade;
        }
    }

    const students = [new Student('Donald', 'Trump', 20, 100), new Student('Joe', 'Biden', 6, 82)];

    function printStudents(first, ...students) {

        for (let i = 0; i < students.length; i++) {
            const s = students[i];
            if (first) {
                console.log(s.firstName, s.lastName, " Age:", s.age, " Grade:", s.grade);

            } else {
                console.log(s.lastName, s.firstName, " Grade:", s.grade, " Age:", s.age);
            }
        }
    }
    printStudents(false, ...students);
    printStudents(true, ...students);

    function cloneStudent(original) {

        let { firstName, lastName, ...rest } = original;

        [lastName, firstName] = [firstName, lastName];

        return { firstName, lastName, ...rest };

    }
    console.log(cloneStudent(students[0]));
}());