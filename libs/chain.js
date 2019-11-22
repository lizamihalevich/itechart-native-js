import filter from './filter';
import forEach from './forEach';
import map from './map';
import reduce from './reduce';
import skip from './skip';
import take from './take';

var chain = function(arr) {
    this.array = arr;

    this.forEach = function(callback) {
        this.array = forEach(this.array, callback);
        return this;
    }

    this.filter = function(callback) {
        this.array = filter(this.array, callback);
        return this.array;
    }

    this.take = function(n) {
        this.array = take(this.array, n);
        return this.array;
    }

    this.skip = function(n) {
        this.array = skip(this.array, n);
        return this.array;
    }
    return this;
}

export default chain;