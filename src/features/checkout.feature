# language: es
Característica: Proceso de compra

  Antecedentes:
    Dado que el usuario está autenticado como "standard_user"

  Escenario: Compra exitosa de un producto
    Dado que el usuario agrega "Sauce Labs Backpack" al carrito
    Y el usuario navega al carrito de compras
    Cuando inicia el proceso de compra
    Y completa el formulario con el nombre "Juan", apellido "Pérez" y código postal "15001"
    Y finaliza la compra
    Entonces se debe mostrar la confirmación "Thank you for your order!"