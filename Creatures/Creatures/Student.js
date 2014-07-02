var People;
(function (People) {
    var Student = (function () {
        function Student(firstName, lastName, age, sex) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
            this.sex = sex;
            this.courses = [];
        }
        Student.getCourseLimit = function () {
            return {
                maximumCoursesAYear: this._maximumCoursesAYear
            };
        };

        Student.prototype.addCourse = function (course) {
            this.courses.push(course);
        };

        Student.prototype.removeCourse = function (course) {
            var courseToBeRemovedIndex = this.courses.indexOf(course);
            if (courseToBeRemovedIndex < 0) {
                throw new Error('The course could not be found');
            }

            var courseToBeRemoved = this.courses[courseToBeRemovedIndex];
            this.courses[courseToBeRemovedIndex] = this.courses[this.courses.length - 1];
            this.courses.pop();

            return courseToBeRemoved;
        };

        Student.prototype.greet = function () {
            console.log('Hi, my name is ' + this.firstName + ' ' + this.lastName);
        };
        Student._maximumCoursesAYear = 15;
        return Student;
    })();
    People.Student = Student;
})(People || (People = {}));
//# sourceMappingURL=Student.js.map
