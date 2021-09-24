let favoriteThings = ['gumbo', 'dogs', 'video game', 'hot cheetos', 
'roses', 'gumby','cheeses', 'collard green', 
'sitting', 'eating', 'comedy shows','teh internetz'];


let firstVerse = favoriteThings.slice(0,4);
let secondVerse = favoriteThings.slice(4,8);
let thirdVerse = favoriteThings.slice(8);

console.log(firstVerse.join(' and '));
console.log(secondVerse.join(' and '));
console.log(thirdVerse.join(' and '));
console.log('These are a few of my favorite things!');

