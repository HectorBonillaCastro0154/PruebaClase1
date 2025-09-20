
    function verSaludo() {
      detenerBaile();
      document.getElementById("mascota").innerHTML = `
<pre>
   ( \\_/ )

   (=o.o=)

  (\"\")_(\"\")

¡Hola! Soy tu conejo mascota.
      `;
    }

    function verBaile() {
      
      const frames = [

`   ( \\_/ )

   (=o.o=)

   (\"\") (\"\")  
🎵 Dale a tu cuerpo alegria Macarena `,

`    ( \\_/ )

    (=o.o=)

   (\"\")   (\"\") 
🎵 Dale a tu cuerpo alegria Macarena 🎶 `,

`   ( \\_/ )

   (=o.o=)

   (\"\") (\"\")  
🎵 Dale a tu cuerpo alegria Macarena 🎶 🎶`,

`    ( \\_/ )

    (=o.o=)

   (\"\")   (\"\")  
🎵 Dale a tu cuerpo alegria Macarena 🎶 🎶 🎶`,
   
      ];

     let i = 0; 
     detenerBaile(); 
     window.baileInterval = setInterval(() => { 
      document.getElementById("mascota").innerHTML = "<pre>" + 
        frames[i] + "</pre>";
         i = (i + 1) % frames.length; 
        }, 400); 
      }

// Función para detener el baile si esta en ejecución
 function detenerBaile() {
      clearInterval(window.baileInterval);
      window.baileInterval = null;
    }

    function ocultarMascota() {
      detenerBaile();
      document.getElementById("mascota").innerHTML = "";
    }


    // ---- Calculadora ----

function borrarCalculo(){
  document.getElementById("resultado").innerText = " ";
  document.getElementById("numA").value = "";
  document.getElementById("numB").value = "";
  document.getElementById("numA").focus();
}

    function calcular(operacion) {
      const a = parseFloat(document.getElementById("numA").value);
      const b = parseFloat(document.getElementById("numB").value);
      let resultado;

      if (isNaN(a) || isNaN(b)) {
        resultado = "Por favor ingresa ambos números.";
      } else {
        switch (operacion) {
          case 'sumar': resultado = a + b; break;
          case 'restar': resultado = a - b; break;
          case 'multiplicar': resultado = a * b; break;
          case 'dividir':
            resultado = b !== 0 ? (a / b) : "Error: división por cero";
            break;
        }
      }

      document.getElementById("resultado").innerText = "Resultado: " + resultado;
    }