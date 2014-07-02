module Animals {
    export class Frog implements Interfaces.IAnimal {
        constructor(public name: string, public age: number, public sex: Sex, public food: string) {
            this.food = food;
        }

        greet(): void {
            console.log('Hi, I am' + this.name + ', I am ' + this.sex + ' and I eat ' + this.food);
        }
    }
} 