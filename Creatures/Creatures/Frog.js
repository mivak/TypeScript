var Animals;
(function (Animals) {
    var Frog = (function () {
        function Frog(name, age, sex, food) {
            this.name = name;
            this.age = age;
            this.sex = sex;
            this.food = food;
            this.food = food;
        }
        Frog.prototype.greet = function () {
            console.log('Hi, I am' + this.name + ', I am ' + this.sex + ' and I eat ' + this.food);
        };
        return Frog;
    })();
    Animals.Frog = Frog;
})(Animals || (Animals = {}));
//# sourceMappingURL=Frog.js.map
