module Collections {
    export class List<T> {
        private _collection: T[];

        constructor() {
            this._collection = [];
        }

        add(item: T) {
            this._collection.push(item);
        }

        remove(item: T): string {
            var itemToBeRemovedIndex = this._collection.indexOf(item);
            if (itemToBeRemovedIndex < 0) {
                throw new Error('The item could not be found');
            }

            var itemToBeRemoved = this._collection[itemToBeRemovedIndex];
            this._collection[itemToBeRemovedIndex] = this._collection[this._collection.length - 1];
            this._collection.pop();

            return itemToBeRemoved.toString();
        }

        get count() {
            return this._collection.length;
        }
    }
}