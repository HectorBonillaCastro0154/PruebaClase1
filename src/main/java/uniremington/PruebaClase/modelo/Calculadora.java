package uniremington.PruebaClase.modelo;

public class Calculadora {

    public double suma(double a, double b) {
        return a + b;
    }

    public double resta(double a, double b) {
        return a - b;
    }

    public double multiplicacion(double a, double b) {
        return a * b;
    }

    public double division(double a, double b) {
        if (b == 0) {
            return 0; // no deja realizar división por 0
        }
        return a / b;
    }
}
