import filter from './filter';
import forEach from './forEach';
import map from './map';
import reduce from './reduce';
import skip from './skip';
import take from './take';

const chain = function(arr) {
    this.array = arr;

    this.forEach = (callback) => {
        this.array = forEach(this.array, callback);
        return this;
    }

    this.filter = (callback) => {
        this.array = filter(this.array, callback);
        return this;
    }

    this.take = (n) => {
        this.array = take(this.array, n);
        return this;
    }

    this.skip = (n) => {
        this.array = skip(this.array, n);
        return this;
    }

    this.map = (callback) => {
        this.array = map(this.array, callback);
        return this;
    }

    this.reduce = (callback, initialValue) => {
        this.array = reduce(this.array, callback, initialValue);
        return this;
    }

    this.value = () => {
        return this.array;
    }
    return this;
}

export default chain;