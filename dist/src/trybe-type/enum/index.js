"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const EX = __importStar(require("./exercises"));
console.log(" A AREA DE UM: ");
console.log(`- Quadrado de 10 cm: ${EX.getSquareArea(10)} cm-2`);
console.log(`- Quadrado de 5 cm: ${EX.getSquareArea(5)} cm-2`);
console.log(`- Quadrado de 5 cm: ${EX.getSquareArea(100)}cm-2`);
console.log(`- Retângulo de base 10cm e altura 25cm: ${EX.getRectangleArea(10, 25)}cm²`);
console.log(`- Retângulo de base 5cm e altura 30cm: ${EX.getRectangleArea(5, 30)}cm²`);
console.log(`- Retângulo de base 200cm e altura 100cm: ${EX.getRectangleArea(200, 100)}cm²`);
console.log(`- Triângulo de base 10cm e altura 25cm: ${EX.getTriangleArea(10, 25)}cm²`);
console.log(`- Triângulo de base 5cm e altura 30cm: ${EX.getTriangleArea(5, 30)}cm²`);
console.log(`- Triângulo de base 100cm e altura 200cm: ${EX.getTriangleArea(100, 200)}cm²`);
console.log("\nO PERÍMETRO DE UM:");
console.log(`- Quadrado de lado 10cm: ${EX.getPolygonPerimeter([10, 10, 10, 10])}cm`);
console.log(`- Retângulo de base 10cm e altura 25cm: ${EX.getPolygonPerimeter([10, 25, 10, 25])}cm`);
console.log(`- Triângulo cujos lados tem 10cm cada: ${EX.getPolygonPerimeter([10, 10, 10])}cm`);
console.log("\nVERIFICA A EXISTÊNCIA DE TRIÂNGULOS CUJOS LADOS TÊM:");
console.log(`- 10cm, 5cm e 3cm: ${EX.triangleCheck(10, 5, 3)}`);
console.log(`- 10cm, 5cm e 3cm: ${EX.triangleCheck(10, 5, 8)}`);
console.log(`- 10cm, 5cm e 3cm: ${EX.triangleCheck(30, 30, 30)}`);
console.log(`- Losango com diagonais iguais a 32cm e 18cm: ${EX.getRhombusArea(32, 18)}cm²`);
console.log(`- Losango com diagonais iguais a 200cm e 50cm: ${EX.getRhombusArea(200, 50)}cm²`);
console.log(`- Losango com diagonais iguais a 75cm e 25cm: ${EX.getRhombusArea(75, 25)}cm²`);
console.log(`- Trapézio com base maior igual a 100cm, base menor igual a 70cm e altura igual a 50cm: ${EX.getTrapezoidArea(100, 70, 50)}cm²`);
console.log(`- Trapézio com base maior igual a 75cm, base menor igual a 50cm e altura igual a 35cm: ${EX.getTrapezoidArea(75, 50, 35)}cm²`);
console.log(`- Trapézio com base maior igual a 150cm, base menor igual a 120cm e altura igual a 80cm: ${EX.getTrapezoidArea(150, 120, 80)}cm²`);
console.log(`- Círculo de raio 10cm: ${EX.getCircleArea(10)}cm²`);
console.log(`- Círculo de raio 5cm: ${EX.getCircleArea(5)}cm²`);
console.log(`- Círculo de raio 100cm: ${EX.getCircleArea(100)}cm²`);
