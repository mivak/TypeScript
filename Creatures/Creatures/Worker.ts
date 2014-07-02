module People {
    export class Worker implements Interfaces.IHuman {
        jobs: string[];

        constructor(public firstName: string, public lastName: string, public age: number, public sex: Sex) {
            this.jobs = [];
        }

        getAJob(job: string): void {
            this.jobs.push(job);
        }

        quitAJob(job: string): string {
            var jobToBeQuitIndex = this.jobs.indexOf(job);
            if (jobToBeQuitIndex < 0) {
                throw new Error('The job could not be found');
            }

            var jobToBeQuit = this.jobs[jobToBeQuitIndex];
            this.jobs[jobToBeQuitIndex] = this.jobs[this.jobs.length - 1];
            this.jobs.pop();

            return jobToBeQuit;
        }

        greet(): void {
            console.log('Hi, my name is ' + this.firstName + ' ' + this.lastName);
        }
    }
} 