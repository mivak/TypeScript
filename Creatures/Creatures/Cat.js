var Animals;
(function (Animals) {
    var Cat = (function () {
        function Cat(name, age, sex, color) {
            this.name = name;
            this.age = age;
            this.sex = sex;
            this.color = color;
            this.color = color;
        }
        Cat.prototype.greet = function () {
            console.log('Hi, I am ' + this.name + ', my color is ' + this.color + ' and I am ' + this.age + ' years old. Meooow');
        };
        return Cat;
    })();
    Animals.Cat = Cat;
})(Animals || (Animals = {}));
//# sourceMappingURL=Cat.js.map
