package uniremington.PruebaClase.vista;

public class Mascota {
    String orejas = "  ( \\_/ )";
    String cara = "    (=o.o=)";
    String patas = "(\"\")_(\"\")";

    public String saludo() {
        return orejas + "\n" +
                cara +
                patas;
    }
}
