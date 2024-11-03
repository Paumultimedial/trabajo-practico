document.getElementById('miFormulario').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario

    // Obtener los valores de los campos , declaro las variables le asigno valor que corresponde al id declarado al dom
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const mensajeDiv = document.getElementById('mensaje');
    
    // Limpiar mensajes anteriores, mensaje div lo muestra vacio '' tomando el textcontent
    mensajeDiv.textContent = '';

    // Validar el nombre - Si el nombre es estrictamente igual a '' (o sea vacio) devuelve el mensaje mediante textContent 
    if (nombre === '') {
        mensajeDiv.textContent += 'El nombre es requerido. ';
    }

    // Validar el correo electrónico - si el mail es estrtictamente '' vacio devuelve ese mensaje 
    if (email === '') {
        mensajeDiv.textContent += 'El correo electrónico es requerido. ';
    } else if (!email.includes('@') || !email.includes('.')) {
        mensajeDiv.textContent += 'Ingrese un correo electrónico válido. ';
    }
// Valido tambien mediante el signo de negacion! que si el mail no incluye @ y si tampoco incluye . entonces devuelve el mensaje de abajo, ambas condiciones tienen que cumplirse . 



    // Si no hay errores, '' aparece vacio sin errores, entonces se cumple la condicion y se muestra el mensaje 
    if (mensajeDiv.textContent === '') {
        mensajeDiv.textContent = 'Formulario enviado con éxito!';

        // Limpiar los campos - aqui vuelvo a poner en "blanco" los campos nombre y email
        document.getElementById('nombre').value = '';
        document.getElementById('email').value = '';
    }
});