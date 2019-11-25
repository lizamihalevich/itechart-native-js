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
        return this;
    }

    this.take = function(n) {
        this.array = take(this.array, n);
        return this;
    }

    this.skip = function(n) {
        this.array = skip(this.array, n);
        return this;
    }

    this.map = function(callback) {
        this.array = map(this.array, callback);
        return this;
    }

    this.reduce = function(callback, initialValue) {
        this.array = reduce(this.array, callback, initialValue);
        return this;
    }

    this.value = function() {
        return this.array;
    }
    return this;
}

export default chain;