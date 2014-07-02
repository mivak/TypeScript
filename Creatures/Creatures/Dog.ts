module Animals {
    'use strict';
    export class Dog implements Interfaces.IAnimal {

        constructor(public name: string, public age: number, public sex: Sex, public breed: string) {
            this.breed = breed;
        }

        greet(): void {
            console.log('Hi, I am ' + this.name + ', my breed is ' + this.breed + ' and I am ' + this.age + ' years old. Baffff');
        }
    }
} 