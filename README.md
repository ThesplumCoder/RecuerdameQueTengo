# RecuerdameQueTengo

Proyecto elaborado por:

+ Anderson Yeseth Acuña Vargas(2191965)

+ Andrés Felipe Avella Rubiano(2193060)

Inventario de uso general desarrollado en tecnologías web.

## Concepto

Crear una aplicación web de inventario, que le permita al usuario mantener  
todas sus pertenencias registradas, esquematizadas y clasificadas según su  
gusto. Esta aplicación le ayudará a tener conocimiento en tiempo real de lo  
que posee y de lo que carece, permitiéndole tomar decisiones al respecto con  
esos datos. La mejora al inventario tradicional es la portabilidad, va a  
poder tenerlo en el dispositivo de su preferencia.

## Modelos de las entidades

Actualmente la aplicación soporta dos modelos:

+ Objeto:

    ```json
    {
        "_id" : Number,
        "nombre" : String,
        "descripcion" : String,
        "ubicacion" : String,
        "categoria" : Number,
        "costo" : Number
    }
    ```

+ Categoría:

    ```json
    {
        "_id" : Number,
        "nombre" : String,
        "descripcion" : String
    }
    ```
