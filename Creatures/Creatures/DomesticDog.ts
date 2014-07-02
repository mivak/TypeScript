module Animals {
    export class DomesticDog extends Animals.Dog {
        

        constructor(name: string, age: number, sex: Sex, breed: string, public toys: Collections.List<string>) {
            super(name, age, sex, breed);
            this.toys = toys;
        }
    }
} 