// ./capacity.ts

const units = ["kl", "hl", "dal", "l", "dl", "cl", "ml"];

export function convert(value: number, fromUnit: string, toUnit: string): number {
    const fromIndex = units.indexOf(fromUnit);
    const toIndex = units.indexOf(toUnit);
    const exponent = (toIndex - fromIndex);

    return value * Math.pow(10, exponent);
}

console.log(convert(10, 'l', 'ml'))
console.log(units.indexOf('l'));
console.log(units.indexOf('ml'));
