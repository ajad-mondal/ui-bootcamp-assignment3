const obj1 = {
    key1: 1,
    key2: 2,
    key3: 3,
    key4: {
        key5: 4
    }
};

const obj2 = {
    key1: 1,
    key2: 2,
    key3: 3,
    key4: {
        key5: 4
    }
};

const obj3 = {
    key1: 9,
    key2: 8,
    key3: 3,
    key4: {
        key5: 4
    }
};

const isSameObject = (object, anotherObject) => {
    if(Object.keys(object).length !== Object.keys(anotherObject).length) {
        return false;
    }

    for(key in object){
        if(typeof object[key] === 'object' && typeof anotherObject[key] === 'object'){
            if(!isSameObject(object[key], anotherObject[key])) return false;
        }
        else if(object[key] !== anotherObject[key]){
            return false;
        }
    }
    return true;
}

console.log(isSameObject(obj1, obj2));
console.log(isSameObject(obj1, obj3));