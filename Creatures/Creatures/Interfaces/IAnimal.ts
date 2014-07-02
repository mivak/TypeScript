module Interfaces {
    export interface IAnimal extends Interfaces.ICreature {
        name: string;
        age: number;
    }
}