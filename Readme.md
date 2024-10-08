## SOLID

## Principios SOLID

SOLID es un acrónimo acuñado por Robert C.Martin en el cual se representan los cinco principios básicos de la programación orientada a objetos. La intención de seguir estos principios es eliminar malos diseños, evitar la refactorización y construir un código más eficiente y fácil de mantener.

Los cinco principios de SOLID para el diseño de aplicaciones de software son: 

    S – Single Responsability Principle (SRP) 

    O – Open/Closed Principle (OCP) 

    L – Liskov Substitution Principle (LSP) 

    I – Interface Segretation Principle (ISP) 

    D – Dependency Inversion Principle (DIP) 


### Principios

#### 1. S – Single Responsability Principle (SRP) (Principio de Responsabilidad Única)

Este principio establece que un componente o clase debe tener una responsabilidad única, sencilla y concreta. Esto simplifica el código al evitar que existan clases que cumplan con múltiples funciones, las cuales son difíciles de memorizar y muchas veces significan una pérdida de tiempo buscando qué parte del código hace qué función

##### Ejemplo:

```java
class Empleado {
    void calcularSalario() { // Responsabilidad 1: Calcular salario }
    void generarReporte() { // Responsabilidad 2: Generar reporte }
}
```
#### 2. O – Open/Closed Principle (OCP) (Principio abierto / cerrado)

Este principio establece que los componentes del software deben estar abiertos para extender a partir de ellos, pero cerrados para evitar que se modifiquen..

##### Ejemplo:

```java
interface Forma {
    double calcularArea();
}

class Rectangulo implements Forma {
    double calcularArea() { // Cálculo del área del rectángulo }
}

class Circulo implements Forma {
    double calcularArea() { // Cálculo del área del círculo }
}
```

#### 3. L – Liskov Substitution Principle (LSP) (Principio de substitución de Liskov) 

Este principio establece que una subclase puede ser sustituida por su superclase. Es decir, podemos crear una subclase llamada Auto, la cual deriva de la superclase Vehículo.  Si al usar la superclase el programa falla, este principio no se cumple. 

##### Ejemplo:

```java
class Rectangulo {
    int ancho;
    int altura;
    void setAncho(int w) { ancho = w; }
    void setAltura(int h) { altura = h; }
    int getArea() { return ancho * altura; }
}

class Cuadrado extends Rectangulo {
    void setAncho(int w) { 
        ancho = w;
        altura = w; // Violación del principio LSP
    }
    void setAltura(int h) {
        altura = h;
        ancho = h; // Violación del principio LSP
    }
}

```

#### 4. I – Interface Segretation Principle (ISP) (Principio de segregación de interfaz) 

Este principio establece que los clientes no deben ser forzados a depender de interfaces que no utilizan. Es importante que cada clase implemente las interfaces que va a utilizar. De este modo, agregar nuevas funcionalidades o modificar las existentes será más fácil. 

##### Ejemplo:

```java
interface Trabajo {
    void ejecutar ();
}
interface TrabajoCompuesto {
    void ejecutarTrabajoCompuesto ();
}
class Trabajador implements Trabajo {
    void ejecutar () { // Implementacion del trabajo }
} 
class Gerente implements Trabajo, Trabajo Compuesto {
    void ejecutar () { // Implementacion del trabajo }
    void ejecutarTrabajoCompuesto () { // Implementacion del trabajo compuesto }
}
```

#### 5. D – Dependency Inversion Principle (DIP) (Principio de inversión de dependencias) 

Este principio establece que los módulos de alto nivel no deben de depender de los de bajo nivel. En ambos casos deben depender de las abstracciones. Alto nivel se refiere a operaciones cuya naturaleza es más amplia o abarca un contexto más general y bajo nivel son componentes individuales más específicos. 

##### Ejemplo.

```java

interface Conexion {
    void conectar();
}

class ConexionSQL implements Conexion {
    void conectar() { // Conexión a la base de datos SQL }
}

class ConexionMySQL implements Conexion {
    void conectar() { // Conexión a la base de datos MySQL }
}

class Cliente {
    Conexion conexion;
    Cliente(Conexion conexion) {
        this.conexion = conexion;
    }
    void conectar() {
        conexion.conectar();
    }
}
```

#### CONCLUSIÓN

Aplicar los principios de SOLID nos permitirá crea software más ordenado, limpio y fácil de mantener. En sistemas cuyo tamaño se considera grande, y donde existen muchos módulos, librerías y funciones, contar con estos principios no solo ayudará en el mantenimiento, también a crecer el código de manera más eficiente y limpia. 