let favoriteThings = ['gumbo', 'dogs', 'video games', 'hot cheetos', 
'flowers', 'gumby','cheese', 'collard greens', 
'guitar', 'redbull', 'coffee','the internet'];


let firstVerse = favoriteThings.slice(0,4);
let secondVerse = favoriteThings.slice(4,8);
let thirdVerse = favoriteThings.slice(8);

console.log(firstVerse.join(' and '));
console.log(secondVerse.join(' and '));
console.log(thirdVerse.join(' and '));
console.log('These are a few of my favorite things!');

