// --- Metodo para validar inputs ---

//validacion de solo texto
// 🔹 Exportamos la función tipada
export const onlyText = (e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  // Expresión regular que permite solo letras (mayúsculas/minúsculas), espacios y el signo "?"
  const regex = /^[a-zA-Z?\s]*$/;

  // Teclas especiales que deben poder usarse aunque no coincidan con la regex
  const allowedKeys = [
    "Backspace",
    "Delete",
    "ArrowLeft",
    "ArrowRight",
    "ArrowUp",
    "ArrowDown",
    "Tab",
    "Enter",
  ];

  // Si la tecla presionada no cumple la regex y no está en las permitidas...
  if (!regex.test(e.key) && !allowedKeys.includes(e.key)) {
    e.preventDefault(); // ...bloqueamos su escritura en el input
  }
};


// 🔹 Valida que el texto ingresado sea un correo electrónico válido
export const onlyEmail = (e: React.KeyboardEvent<HTMLInputElement>) => {
  const regex = /^[a-zA-Z0-9@._-]+$/;
  
  // Teclas que deben permitirse siempre
  const allowedKeys = [
    "Backspace",
    "Delete",
    "ArrowLeft",
    "ArrowRight",
    "Tab",
    "Enter",
  ];

  if (!regex.test(e.key) && !allowedKeys.includes(e.key)) {
    e.preventDefault(); // Bloquea caracteres no válidos
  }
};
