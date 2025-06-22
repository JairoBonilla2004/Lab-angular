import { Calculator } from './calculator';

describe('Test for Calculator', () => {
  let calculator: Calculator;
  beforeEach(() => {
    calculator = new Calculator();
  });

  describe('Test for multiply', () => {
    it('Should return twelve', () => {
      // Arrange
      const calculator = new Calculator();
      // Act
      const result = calculator.multiply(3, 4);
      // Assert
      expect(result).toBe(12);
      expect(calculator).toBeTruthy();
    });

    it('Should return ten', () => {
      // Arrange
      const calculator = new Calculator();
      // Act
      const result = calculator.multiply(2, 5);
      // Assert
      expect(result).toBe(10);
      expect(calculator).toBeTruthy();
    });
  });

  describe('Test for divide', () => {
    it('Should divide two numbers correctly', () => {
      // Arrange
      const calculator = new Calculator();
      // Act & Assert
      expect(calculator.divide(10, 2)).toBe(5);
      expect(calculator.divide(10, 2)).toEqual(5);
    });

    it('Should throw error when dividing by zero', () => {
      const calculator = new Calculator();
      expect(() => calculator.divide(10, 0)).toThrow(); // opcional si lo manejas
    });
  });

  describe('Jasmine Matchers', () => {
    it('test of matchers', () => {
      let name2; // no inicializado → undefined
      let name = 'Jairo'; // definido

      expect(name).toBeDefined(); // name = "Jairo", definido → pasa
      expect(name2).toBeUndefined(); // name2 = undefined → pasa
      expect(1 + 5 == 6).toBeTruthy(); // pasa
      expect(1 + 1 == 6).toBeFalsy(); // pasa
      expect(8).toBeLessThan(40); // pasa
      expect(50).toBeGreaterThan(10); // pasa
      expect('abcdbfg').toMatch(/abc/); // pasa
    });
  });
});
