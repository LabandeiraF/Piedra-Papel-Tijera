        let puntajeUsuario = 0;
        let puntajeCpu = 0;
        function jugar(usuario) {
            if (puntajeUsuario >=3 || puntajeCpu >=3){
                return mostrarResultado
            }
            let cpu = obtenerTiroAleatorio();

            let resultado = aJugar(usuario, cpu);
            mostrarResultado(usuario, cpu, resultado);
        }

        function aJugar(usuario, cpu) {
            if (
                (usuario === "papel" && cpu === "piedra") ||
                (usuario === "piedra" && cpu === "tijera") ||
                (usuario === "tijera" && cpu === "papel")
            ) {
                return "punto para Usuario";
            } else if (usuario === cpu) {
                return "empate";
            } else {
                return "punto para CPU";
            }
        }

        function obtenerTiroAleatorio() {
            let tiros = ["piedra", "papel", "tijera"];
            let indice = Math.floor(Math.random() * tiros.length);
            return tiros[indice];
        }

        function mostrarResultado(usuario, cpu, resultado) {
            let resultContainer = document.createElement("div");
            resultContainer.className = "result";
            resultContainer.textContent = `Usuario: ${usuario} vs CPU: ${cpu} - ${resultado}`;

            let gameDiv = document.querySelector(".game");
            gameDiv.appendChild(resultContainer);

            animateResult(resultContainer);
        }

        function animateResult(element) {
            element.style.animation = "shake 0.5s";
            element.addEventListener("animationend", () => {
                element.style.animation = "";
            });
        }
    