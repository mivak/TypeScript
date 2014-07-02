var Animals;
(function (Animals) {
    'use strict';
    var Dog = (function () {
        function Dog(name, age, sex, breed) {
            this.name = name;
            this.age = age;
            this.sex = sex;
            this.breed = breed;
            this.breed = breed;
        }
        Dog.prototype.greet = function () {
            console.log('Hi, I am ' + this.name + ', my breed is ' + this.breed + ' and I am ' + this.age + ' years old. Baffff');
        };
        return Dog;
    })();
    Animals.Dog = Dog;
})(Animals || (Animals = {}));
//# sourceMappingURL=Dog.js.map
