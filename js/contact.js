let btn_contacto = document.querySelector(".sendMessage-btn")
let input_form = document.querySelectorAll(".form-field input")
let textarea_form = document.querySelector(".form-field textarea")
let form = document.querySelector(".form");


form.addEventListener("submit", (event) => {
    event.preventDefault();
    let nombre = form.querySelector('input[type="text"]').value.trim();
    let email = form.querySelector('input[type="email"]').value.trim();
    let mensaje = form.querySelector('textarea').value.trim();

    // Verificar que los campos no estén vacíos
    if (nombre !== "" && email !== "" && mensaje !== "") {
        // Mostrar el mensaje de éxito con SweetAlert
        Swal.fire({
            title: "¡Buen trabajo!",
            text: "¡Tu mensaje ha sido enviado!",
            icon: "success"
        }).then(() => {
            // Opcionalmente, puedes resetear el formulario después de mostrar el mensaje
            form.reset();
        });
    } else {
        // Mostrar un mensaje de error si alguno de los campos está vacío
        Swal.fire({
            title: "¡Error!",
            text: "Por favor, completa todos los campos.",
            icon: "error"
        });
    }
});
