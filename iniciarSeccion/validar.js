document.addEventListener("DOMContentLoaded", function() {
    const usuarioEmail = document.getElementById("usuarioEmail");
    const passwordInput = document.getElementById("passwordIp");
    const iniciar = document.getElementById("iniciar");

    iniciar.addEventListener("click", function(event){
        event.preventDefault();

        const nombre = usuarioEmail.value;
        const password = passwordInput.value;

        const formError = document.getElementById("form");

        const emailError=document.getElementById("emailError");
        const passwordError=document.getElementById("passwordError");

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const passwordRegex = /^[A-Za-z\d@$!%*#?&]{6,}$/;
        
        if (!emailRegex.test(nombre) || nombre ==="") {
            emailError.textContent = "Ingrese un email válido, o complete el campo.";
            passwordError.textContent = "";
            formError.classList.remove("iniciar__seccion");
            formError.classList.add("iniciar__seccion-error");
        } else if (!passwordRegex.test(password) ) {
            emailError.textContent = "";
            passwordError.textContent = "Ingrese una contraseña válida.";
            formError.classList.remove("iniciar__seccion");
            formError.classList.add("iniciar__seccion-error");
        }   else if(nombre === "" && password !== ""){
            emailError.textContent = "Este campo no puede estar vacio";
            passwordError.textContent = "";
            formError.classList.remove("iniciar__seccion");
            formError.classList.add("iniciar__seccion-error");
        } else if(nombre != "" && password === ""){
            emailError.textContent = "";
            passwordError.textContent = "Este campo no puede estar vacio";
            formError.classList.remove("iniciar__seccion");
            formError.classList.add("iniciar__seccion-error");
        }else if (nombre === "" && password === ""){
            emailError.textContent = "Este campo no puede estar vacio!";
            passwordError.textContent = "Este campo no puede estar vacio!";
            formError.classList.remove("iniciar__seccion");
            formError.classList.add("iniciar__seccion-error");
        }  else {
            formError.classList.remove("iniciar__seccion-error");
            formError.classList.add("iniciar__seccion");
            emailError.textContent = "";
            passwordError.textContent = "";
            formError.reset();
        }

        const usuarioAdmin = "admin@gmail.com";
        const passwordAdmin = "admin123";

        if(nombre === usuarioAdmin && password === passwordAdmin){
            window.location.href = "/inicioAdmin/inicioAdmin.html";
        } else{
            // alert("Error");
        }

    });
});
