# language: es
Característica: Autenticación de usuarios

  Escenario: Iniciar sesión exitosamente con usuario estándar
    Dado que el usuario navega a la página de inicio de sesión
    Cuando ingresa las credenciales "standard_user" y "secret_sauce"
    Entonces el usuario debería ser redirigido a la página de productos

  Escenario: Intento de inicio de sesión con usuario bloqueado
    Dado que el usuario navega a la página de inicio de sesión
    Cuando ingresa las credenciales "locked_out_user" y "secret_sauce"
    Entonces se debe mostrar el mensaje de error "Epic sadface: Sorry, this user has been locked out."