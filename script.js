

// let newObject = Object.assign({}, user, {passport}) // соединяет 2 и более объекта
// Object.freeze(user)
// Object.freeze(user.passport) // subZero
// Object.keys(user) // возвращает массив с ключами из объекта
// Object.values(user) // возвращает массив со значениями из объекта
// Object.entries(user) // возвращет массив с массивами внутри которыз ключ и значение [['name', 'shoxa']] 
// Раскидать людей в разные массивы в зависимости от их почты
let object1 = {
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
        phone: "1-770-736-8031 x56442",
        website: "hildegard.org",
        isMerried: true,
        HaveChilden: false,
    }
let address = {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        geo: {
            lat: -37.3159,
            lng: 81.1496
        },
        zipcode: "92998-3874",
    }
let company = {
        name: "Romaguera-Crona",
        catchPhrase: "Multi-layered client-server neural-net",
        bs: "harness real-time e-markets"
    }


// ТЗ 
// 1. Соеденить два объекта в одно целое но не изменяя исходные данные
let combinedObj = Object.assign([],object1, {address}, {company});
console.log(combinedObj, object1);

// 2. Из этого объекта вытащить все клюи в отдельную переменную (ключи)
let keys = Object.keys(combinedObj)
console.log(keys)
// 3. Из этого объекта вытащить все значени в отдельную переменную (значения)
let values = Object.values(combinedObj)
console.log(values)
// 4. Эти два полученных массива вы должны соеденить
let ValuesAndKeys = [].concat(values, keys)
console.log(ValuesAndKeys)
// 5. Отфильтровать все данные из массива и распределить их по ключам тайпс
let types = {
    number: [],
    string: [],
    boolean: [],
    object: []
}
let result = ValuesAndKeys.map(item => {
    switch (typeof item) {
        case 'number':
            return types.number.push(item)
        case 'string':
            return types.string.push(item)
        case 'boolean':
            return types.boolean.push(item)
        case 'object':
            return types.object.push(item)
    }
    // if (typeof item === 'string') {
    //     return types.string.push(item)
    // } else if (typeof item === 'boolean') {
    //     return types.boolean.push(item)
    // } else if (typeof item === 'object') {
    //     return types.object.push(item)
    // } else if (typeof item === 'number') {
    //     return types.number.push(item)
    // }
})  
console.log(types)