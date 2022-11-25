// ./area.ts

const units = ["km²", "hm²", "dam²", "m²", "dm²", "cm²", "mm²"];

export function convert(value: number, fromUnit: string, toUnit: string): number {
    const fromIndex = units.indexOf(fromUnit);
    const toIndex = units.indexOf(toUnit);
    const exponent = (toIndex - fromIndex);

    return value * Math.pow(100, exponent);
}


console.log(convert(10, 'km²', 'm²'))
console.log(units.indexOf('km²'));
console.log(units.indexOf('m²'));