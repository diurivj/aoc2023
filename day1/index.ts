import { input } from "./input";

const numberMap: Record<string, number> = {
	zero: 0,
	one: 1,
	two: 2,
	three: 3,
	four: 4,
	five: 5,
	six: 6,
	seven: 7,
	eight: 8,
	nine: 9,
};

function part1() {
	const lines: Array<string> = input.split("\n").filter(Boolean);
	const numbers: Array<number> = [];

	for (const line of lines) {
		const numbersInLine: Array<number> = line.match(/[0-9]/g)?.map(Number) ?? [];
		const firstNumber = numbersInLine[0];
		const lastNumber = numbersInLine[numbersInLine.length - 1];
		const number = Number(`${firstNumber}${lastNumber}`);
		numbers.push(number);
	}

	const sum = numbers.reduce((a, b) => a + b, 0);
	console.log(sum);

	return sum;
}

function part2() {
	const lines: Array<string> = input.split("\n").filter(Boolean);
	const numbers: Array<number> = [];

	for (const line of lines) {
		const numbersInLine = Array.from(
			line.matchAll(/(?=([0-9]|one|two|three|four|five|six|seven|eight|nine))/g),
		)
			.flat()
			.filter(Boolean);
		const firstNumber =
			numbersInLine[0].length > 1 ? numberMap[numbersInLine[0]] : numbersInLine[0];
		const lastNumber =
			numbersInLine[numbersInLine.length - 1].length > 1
				? numberMap[numbersInLine[numbersInLine.length - 1]]
				: numbersInLine[numbersInLine.length - 1];

		const num = `${firstNumber}${lastNumber}`;
		numbers.push(Number(num));
	}

	const sum = numbers.reduce((a, b) => a + b, 0);
	console.log(sum);

	return sum;
}

part2();
