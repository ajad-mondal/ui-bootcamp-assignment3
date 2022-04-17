const object = {
    name : 'Ajad',
    age : 22,
    id : 123,
    role : {
        role: "Developer",
        office: "Chennai"
    }
};

const stringify = (object) => {
    if(typeof object !== 'object') return null;

    let keysLeft = Object.keys(object).length;
    let result = "{";

    for(key in object){
        result += `"${key}" : `;
        
        if(typeof object[key] === 'object'){
            result += stringify(object[key]);
        }
        else{
            result += `"${object[key]}"`;
        }

        keysLeft--;
        result += keysLeft === 0 ? '' : ',';
        
    }

    result += '}';
    return result;
}

console.log(stringify(object));
console.log(stringify({}));
console.log(stringify(1));