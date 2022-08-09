console.log('Hello World!\n==========\n');

// Exercise 1 Section
console.log('EXERCISE 1:\n==========\n');

for (let i = 0; i <= 100; i++) {
	if (i % 2 == 0) {
		console.log(i);
	}
}

// Exercise 2 Section
console.log('EXERCISE 2:\n==========\n');

for (let i = 0; i < 100; i++) {
	if (i % 3 == 0 && i % 5 == 0) {
		console.log('FIZZBUZZ');
	} else if (i % 3 == 0) {
		console.log('FIZZ');
	} else if (i % 5 == 0) {
		console.log('BUZZ');
	} else {
		console.log(i);
	}
}

//Exercise 3 Section
let index1 = 1;
while (index1 <= 100) {
	if (index1 % 2 != 0) {
		console.log(index1);
	}
	index++;
}

// Exercise 4 Section

let value = Math.round(Math.random() * 500);
let n = Math.round(Math.random() * (500 - 100) + 100);
let result = '';
for (let i = 0; i < n; i++) {
	if (i == value) {
		console.log('Found Value');
	} else {
		console.log('Did not find value');
	}
}
// Exercise 4 Section
