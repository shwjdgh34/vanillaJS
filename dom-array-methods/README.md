# Dom-Array-Methods

## API

- <https://randomuser.me/api>

## Methods

### forEach()

- No return, modify inside the array

> bad

```js
for(i = 0 ; i < someArray.length; i++)
```

> good

```js
Array.foreach((item, index, entireArray) => {});
```

### map()

- Similar to forEach() but return new another array
- map() is faster than forEach()
- beacause map() return array, it can be chained by methods

```js
arr.map(num => num * 2).filter(num => num > 5); // possible
arr.forEach(num => num * 2).filter(num => num > 5); // can not
```

- map vs forEach [<https://codeburst.io/javascript-map-vs-foreach-f38111822c0f]>

### sort()

- if nothing on parameter, just arange by string

```js
const arr = [1, 2, 3, 4, 11, 22, 111];
arr.sort();
console.log(arr);
```

> 1, 11, 111, 2, 22 ,3, 4

```js
const arr = [1, 2, 3, 4, 11, 22, 111];
arr.sort((a, b) => {
  return a - b;
});
console.log(arr);
```

> 1, 2, 3, 4, 11, 22, 111

### filter()

- filter() method creates a new array with all elements that pass the test implemented by the provided function

```js
const arr = [20, 23, 25, 40, 14, 22];
const under25 = arr.filter(item => item < 25);
```

### reduece()

```js
const result = arr.reduce((accumulator, currentValue, idx, src) => {
  console.log(accumulator, currentValue, idx, src);
  return accumulator + currentValue;
});
console.log(`result : ${result}`);
```

> 100 1 0 Array [1, 2, 3, 4]
> 101 2 1 Array [1, 2, 3, 4]
> 103 3 2 Array [1, 2, 3, 4]
> 106 4 3 Array [1, 2, 3, 4]
> result : 110

## fetch

### async/await

## document

### createElement()
