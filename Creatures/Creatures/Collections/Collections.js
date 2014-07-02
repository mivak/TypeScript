var Collections;
(function (Collections) {
    var List = (function () {
        function List() {
        }
        List.prototype.add = function (item) {
            this._collection.push(item);
        };

        List.prototype.remove = function (item) {
            var itemToBeRemovedIndex = this._collection.indexOf(item);
            if (itemToBeRemovedIndex < 0) {
                throw new Error('The item could not be found');
            }

            var itemToBeRemoved = this._collection[itemToBeRemovedIndex];
            this._collection[itemToBeRemovedIndex] = this._collection[this._collection.length - 1];
            this._collection.pop();

            return itemToBeRemoved.toString();
        };

        Object.defineProperty(List.prototype, "count", {
            get: function () {
                return this._collection.length;
            },
            enumerable: true,
            configurable: true
        });
        return List;
    })();
    Collections.List = List;
})(Collections || (Collections = {}));
//# sourceMappingURL=Collections.js.map
