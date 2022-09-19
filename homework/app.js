function reverseNumber(num) {
  let numString= num.toString();
  let arr= numString.split('');
  
    let negative= false;
    let str= '';
    for( let i=arr.length-1; i >=0; i--) {
        if (i===0) {
            if (arr[0]==='-') {
                negative= true;
                continue;
            }
        }
    str=str+ arr[i];
}

var num= Number.parseInt(str);
if (negative) {
 num= - num; 
}
return num;
}


function forEach(arr, func) {
    for(let item of arr) {
        func(item);
    }

}


function map(arr, func) {
    let mapArr=[];
  forEach(arr, function(el){
     mapArr.push(func(el)) ;
  })
    return mapArr;
}



function filter(arr, func) {
    let filter=[];
    forEach(arr, function(el){
        if (func(el)) {
 filter.push(el); 
}
    });
    return filter;

}


function getAdultAppleLovers(data) {
     return map(filter(data, function(el){
        return el.age > 18 && el.favoriteFruit==='apple';
    }), function(el){
        return el.name;
    });
}

function getKeys(obj) {
    let arr=[];
    for (let key in obj){
        arr.push(key);
    }
    return arr;
}



function getValues(obj) {
    let keys=getKeys(obj);
    let arr=[];
    for (let key of keys) {
        arr.push(obj[key]);
    }
    return arr;

}


function showFormattedDate(dateObj) {
    let str= dateObj.toString();
    let arr=str.split(' ');
    return 'It is '+ arr[2]+' of '+ arr[1]+', '+ arr[3];
}


/* console.log(reverseNumber(-1234587));

 forEach([2,5,8], function(el){
    console.log(el);
}) 

console.log(map([2,5,8,100], function(el) {
 return el+3; 
}));
console.log(filter([2,5,1,3,8,6,100], function(el) {
 return el>3 
}));
 var data= [
    {
    '_id': '5b5e3168c6bf40f2c1235cd6',
    'index': 0,
    'age': 39,'eyeColor': 'green',
    'name': 'Stein',
    'favoriteFruit': 'apple'
    },
    {
    '_id': '5b5e3168e328c0d72e4f27d8',
    'index': 1,
    'age': 38,
    'eyeColor': 'blue',
    'name': 'Cortez',
    'favoriteFruit': 'strawberry'
    },
    {
    '_id': '5b5e3168cc79132b631c666a',
    'index': 2,
    'age': 2,
    'eyeColor': 'blue',
    'name': 'Suzette',
    'favoriteFruit': 'apple'
    },
    {
    '_id': '5b5e31682093adcc6cd0dde5',
    'index': 3,
    'age': 17,
    'eyeColor': 'green',
    'name': 'Weiss',
    'favoriteFruit': 'banana'
    }
    ];

console.log(getAdultAppleLovers(data)); 
console.log(getKeys({keyOne: 1, keyTwo: 2, keyThree: 3})) ; 
console.log(getValues({keyOne: 1, keyTwo: 2, keyThree: 3})) 
console.log(showFormattedDate(new Date('2022-11-12T01:10:00'))); */