// also tell the complexity of this function.
const snakeCaseObj = {
    first_level_key: "value",
    nested_object: {
        second_level_key: "another value",
        another_nested_object: {
            third_level_key: "yet another value"
        }
    },
    an_array: [{
        array_item_key: "value in array"
    }]
};
function getCamelCaseKey(key){
    let camelCaseKey = '';
    // return function getCamelCaseKey(str){
    //     return camelCaseKey + str;
    // }
    for(let i = 0; i < key.length; i++){
        let ch = key[i];
        if(ch == '_') {
            camelCaseKey += ch[i].toUperCase();
            ++i;
        }else camelCaseKey +=  ch;
    }
    return camelCaseKey;
}
console.log(getCamelCaseKey("first_level_key"));
function convertObjectKeys(snakeCaseObj){
    for(let key in snakeCaseObj){
        if(typeof(key) == Object){
            convertObjectKeys(snakeCaseObj[key]);
        }
        if(key.includes('_')){
            let camelCaseKey = getCamelCaseKey(key);
            Object.
        }
    }
}
const camelCaseObj = convertObjectKeys(snakeCaseObj); 

console.log(camelCaseObj);