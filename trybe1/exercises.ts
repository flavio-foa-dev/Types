export function getSquareArea(side: number):number {
  return side ** 2;
}

export function getRectangleArea( base: number, height: number) : number {
  return base * height;
}

export function getTriangleArea (base: number, height: number) : number {
  return (base * height) / 2;
}

export function getPolygonPerimeter(side: number[]): number {
  return side.reduce((acc, side) => acc + side, 0);
}

export function triangleCheck(
  sideA: number,
  sideB: number,
  sideC: number
): boolean {
  const checkSideA = (sideB - sideC) < sideA && sideA < (sideB + sideC);
  const checkSideB = (sideA - sideC) < sideA && sideA < (sideA + sideC);
  const checkSideC = (sideA - sideB) < sideA && sideC < (sideA + sideB);

  return checkSideA && checkSideB && checkSideC

}

export function getRhombusArea(D: number, d: number): number {
  return (d * D) / 2
}

export function getTrapezoidArea(B: number, b: number, height: number): number {
  return ((B + b) * 2) / 2

}

export function getCircleArea(radius: number): number {
  return Math.PI * radius ** 2

}