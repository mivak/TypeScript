module People {
    export class Student implements Interfaces.IHuman {
        private static _maximumCoursesAYear = 15;

        courses: string[];

        constructor(public firstName: string, public lastName: string, public age: number, public sex: Sex) {
            this.courses = [];
        }

        static getCourseLimit() {
            return {
                maximumCoursesAYear: this._maximumCoursesAYear
            };
        }

        addCourse(course: string): void {
            this.courses.push(course);
        }

        removeCourse(course: string): string {
            var courseToBeRemovedIndex = this.courses.indexOf(course);
            if (courseToBeRemovedIndex < 0) {
                throw new Error('The course could not be found');
            }

            var courseToBeRemoved = this.courses[courseToBeRemovedIndex];
            this.courses[courseToBeRemovedIndex] = this.courses[this.courses.length - 1];
            this.courses.pop();

            return courseToBeRemoved;
        }

        greet(): void {
            console.log('Hi, my name is ' + this.firstName + ' ' + this.lastName);
        }
    }
} 