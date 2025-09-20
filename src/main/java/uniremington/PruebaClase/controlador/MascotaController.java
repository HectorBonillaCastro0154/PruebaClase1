package uniremington.PruebaClase.controlador;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MascotaController {

    @GetMapping("/mascota/saludo")
    public String saludo() {
        String ascii = "( \\_/ )\n" +
                "(=o.o=) " +
                "(\"\")_(\"\")";
        return "<pre>" + ascii + "</pre>";
    }

    @GetMapping("/mascota/baile")
    public String baile() {

        return "<pre>" + "</pre>";
    }
}
