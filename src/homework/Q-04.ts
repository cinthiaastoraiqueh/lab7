(() => {

  /* APLICANDO DRY */

  // EX - 1: Unificación de las funciones de operación
  function calculateOperation(a: number, b: number, c: number): number {
    let sumResult = a + b;
    return sumResult * c;
  }

  // EX - 2: Generalización de cálculo de área
  function calculateArea(shape: 'rectangle' | 'circle', ...dimensions: number[]): number {
    switch (shape) {
      case 'rectangle':
        return dimensions[0] * dimensions[1]; // length * width
      case 'circle':
        return Math.PI * dimensions[0] * dimensions[0]; // π * r^2
      default:
        throw new Error('Unknown shape');
    }
  }

  // EX - 3: Mantener el código tal cual
  function validateEmail(email: string): boolean {
    //...some code for validate here
    return false;
  }

  function validateUsername(username: string): boolean {
    //...some code for validate here
    return false;
  }

})();
