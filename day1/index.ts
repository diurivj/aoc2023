const test_input = `
1abc2
pqr3stu8vwx
a1b2c3d4e5f
treb7uchet
s4ntacl4u5
`;

function main() {
	const lines: Array<string> = test_input.split("\n").filter(Boolean);
	const numbers: Array<number> = [];

	for (const line of lines) {
		const numbersInLine: Array<number> = line.match(/\d+/g)?.map(Number) ?? [];
		const firstNumber = numbersInLine[0];
		const lastNumber = numbersInLine.at(-1);
		const number = Number(`${firstNumber}${lastNumber}`);
		numbers.push(number);
	}

	const sum = numbers.reduce((a, b) => a + b, 0);
	console.log(sum);
}

main();
