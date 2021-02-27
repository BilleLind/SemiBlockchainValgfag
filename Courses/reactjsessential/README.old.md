the course is from:
https://www.linkedin.com/learning/react-js-essential-training/building-modern-user-interfaces-with-react?contextUrn=urn%3Ali%3AlearningCollection%3A6735163765207240704&u=37487420

------
notes:
- a Library, created back in 2013 by facebook


array destructoring
....
const array = {"hey", "too"};
console.log(array)  => 
(2) ["hey", "too"]
0: "hey"
1: "too"
length: 2
__proto__: Array(0)

instead i could =>
const [one, two] = {"one", "two"};
console.log(one) => one
console.log(two) => two
