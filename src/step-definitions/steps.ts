import { Given, When, Then } from '@cucumber/cucumber';
import { ICustomWorld } from '../support/hooks';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';
import { CheckoutPage } from '../pages/CheckoutPage';

Given('que el usuario navega a la página de inicio de sesión', async function (this: ICustomWorld) {
  const loginPage = new LoginPage(this.page!);
  await loginPage.navigateTo();
});

When('ingresa las credenciales {string} y {string}', async function (this: ICustomWorld, username: string, password: string) {
  const loginPage = new LoginPage(this.page!);
  await loginPage.login(username, password);
});

Then('el usuario debería ser redirigido a la página de productos', async function (this: ICustomWorld) {
  const productsPage = new ProductsPage(this.page!);
  await productsPage.verifyOnProductsPage();
});

Then('se debe mostrar el mensaje de error {string}', async function (this: ICustomWorld, errorMessage: string) {
  const loginPage = new LoginPage(this.page!);
  await loginPage.verifyErrorMessage(errorMessage);
});

Given('que el usuario está autenticado como {string}', async function (this: ICustomWorld, username: string) {
  const loginPage = new LoginPage(this.page!);
  const productsPage = new ProductsPage(this.page!);
  await loginPage.navigateTo();
  await loginPage.login(username, 'secret_sauce');
  await productsPage.verifyOnProductsPage();
});

Given('que el usuario agrega {string} al carrito', async function (this: ICustomWorld, productName: string) {
  const productsPage = new ProductsPage(this.page!);
  await productsPage.addProductToCart(productName);
});

Given('el usuario navega al carrito de compras', async function (this: ICustomWorld) {
  const productsPage = new ProductsPage(this.page!);
  await productsPage.goToCart();
});

When('inicia el proceso de compra', async function (this: ICustomWorld) {
  const checkoutPage = new CheckoutPage(this.page!);
  await checkoutPage.startCheckout();
});

When('completa el formulario con el nombre {string}, apellido {string} y código postal {string}', 
  async function (this: ICustomWorld, firstName: string, lastName: string, postalCode: string) {
    const checkoutPage = new CheckoutPage(this.page!);
    await checkoutPage.fillInformation(firstName, lastName, postalCode);
});

When('finaliza la compra', async function (this: ICustomWorld) {
  const checkoutPage = new CheckoutPage(this.page!);
  await checkoutPage.finishCheckout();
});

Then('se debe mostrar la confirmación {string}', async function (this: ICustomWorld, message: string) {
  const checkoutPage = new CheckoutPage(this.page!);
  await checkoutPage.verifyOrderConfirmation(message);
});