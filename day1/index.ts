import { input } from "./input";

// const test_input = `
// 1abc2
// pqr3stu8vwx
// a1b2c3d4e5f
// treb7uchet
// `;

function main() {
	const lines: Array<string> = input.split("\n").filter(Boolean);
	const numbers: Array<number> = [];

	for (const line of lines) {
		const numbersInLine: Array<number> = line.match(/[0-9]/g)?.map(Number) ?? [];

		const firstNumber = numbersInLine[0];
		const lastNumber = numbersInLine[numbersInLine.length - 1];
		console.log(firstNumber, lastNumber);
		const number = Number(`${firstNumber}${lastNumber}`);
		numbers.push(number);
	}

	const sum = numbers.reduce((a, b) => a + b, 0);
	console.log(sum);

	return sum;
}

main();
