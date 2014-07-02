var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Animals;
(function (Animals) {
    var DomesticDog = (function (_super) {
        __extends(DomesticDog, _super);
        function DomesticDog(name, age, sex, breed, toys) {
            _super.call(this, name, age, sex, breed);
            this.toys = toys;
            this.toys = toys;
        }
        return DomesticDog;
    })(Animals.Dog);
    Animals.DomesticDog = DomesticDog;
})(Animals || (Animals = {}));
//# sourceMappingURL=DomesticDog.js.map
