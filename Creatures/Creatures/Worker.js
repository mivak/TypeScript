var People;
(function (People) {
    var Worker = (function () {
        function Worker(firstName, lastName, age, sex) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
            this.sex = sex;
            this.jobs = [];
        }
        Worker.prototype.getAJob = function (job) {
            this.jobs.push(job);
        };

        Worker.prototype.quitAJob = function (job) {
            var jobToBeQuitIndex = this.jobs.indexOf(job);
            if (jobToBeQuitIndex < 0) {
                throw new Error('The job could not be found');
            }

            var jobToBeQuit = this.jobs[jobToBeQuitIndex];
            this.jobs[jobToBeQuitIndex] = this.jobs[this.jobs.length - 1];
            this.jobs.pop();

            return jobToBeQuit;
        };

        Worker.prototype.greet = function () {
            console.log('Hi, my name is ' + this.firstName + ' ' + this.lastName);
        };
        return Worker;
    })();
    People.Worker = Worker;
})(People || (People = {}));
//# sourceMappingURL=Worker.js.map
