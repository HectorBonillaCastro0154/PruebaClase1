package uniremington.PruebaClase.controlador;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CalculadoraController {

    @GetMapping("/calculadora/sumar")
    public double sumar(@RequestParam double a, @RequestParam double b) {
        return a + b;
    }

    @GetMapping("/calculadora/restar")
    public double restar(@RequestParam double a, @RequestParam double b) {
        return a - b;
    }

    @GetMapping("/calculadora/multiplicar")
    public double multiplicar(@RequestParam double a, @RequestParam double b) {
        return a * b;
    }

    @GetMapping("/calculadora/dividir")
    public double dividir(@RequestParam double a, @RequestParam double b) {
        if (b == 0) {
            return Double.NaN;
        }
        return a / b;
    }
}
