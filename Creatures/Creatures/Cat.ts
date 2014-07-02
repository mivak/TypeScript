module Animals {
    export class Cat implements Interfaces.IAnimal {
        
        constructor(public name: string, public age: number, public sex: Sex, public color: string) {
            this.color = color;
        }

        greet(): void {
            console.log('Hi, I am ' + this.name + ', my color is ' + this.color + ' and I am ' + this.age + ' years old. Meooow');
        }
    }
}