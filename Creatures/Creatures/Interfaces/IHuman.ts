module Interfaces {
    export interface IHuman extends Interfaces.ICreature {
        firstName: string;
        lastName: string;
        age: number;
    }
}