const test = 3

if (test > 3) {
	console.log('what do you want')
}

type User = {
	name: string
	age: number
	push?: string
}

const user: User = {
	name: 'david',
	age: 35,
}

if (test < 1) {
	user.push = 'push'
}

let animal = 'dog'

animal = 'cat'
