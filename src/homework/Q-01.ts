(() => {
  // Lista de emails de usuarios de Meta-X
  const userEmails: Array<string> = [
    "email1@gmail.com", 
    "email2@gmail.com", 
    "email3@gmail.com"
  ];
  console.log("User Emails: ", userEmails);

  // Lista de compras de un carrito
  const shoppingCart: Array<{ product: string }> = [
    { product: "switch" },
    { product: "X-box Controller" },
    { product: "steam-gift-card" },
  ];
  console.log("Shopping Cart: ", shoppingCart);

  // Función para sumar más 3 a un número y retornarlo
  const addThree = (number: number): number => {
    return number + 3;
  };
  console.log("addThree(2): ", addThree(2));

  // Función para capitalizar una palabra pasada por parámetros
  function capitalize(word: string): string {
    const lowerCased = word.toLowerCase();
    return lowerCased.charAt(0).toUpperCase() + lowerCased.slice(1);
  }
  console.log("capitalize('capricorn'): ", capitalize("capricorn"));

  // Variable que alerta en caso de que algún evento suceda
  let isEventTriggered: boolean = false;

  if (isEventTriggered) console.log('Event triggered');

  // Variable que se encarga de verificar si un usuario puede acceder o no
  let isUserLoggedIn: boolean = true;

  if (isUserLoggedIn) console.log('Welcome');

  // Variable para hallar el promedio de 3 números
  const average: number = (1 + 2 + 3) / 3;
  console.log("Average: ", average);

  // Variable que almacena el valor de PI
  const PI: number = 3.141592654;
  console.log("PI: ", PI);

  // Variable que controla si un archivo es modificable
  let isFileEditable: boolean = false;

  if (isFileEditable) console.log('Edit this file?');

  // Variable para almacenar el valor de e
  const E: number = 2.718281828;
  console.log("Euler's number (E): ", E);

})();
