import { Page, expect } from '@playwright/test';

export class ProductsPage {
  constructor(private page: Page) {}

  private title = '.title';
  private inventoryItems = '.inventory_item';
  private cartLink = '.shopping_cart_link';

  async verifyOnProductsPage() {
    await expect(this.page.locator(this.title)).toHaveText('Products');
  }

  async addProductToCart(productName: string) {
    const product = this.page.locator(this.inventoryItems).filter({ hasText: productName });
    await product.locator('button').click();
  }

  async goToCart() {
    await this.page.click(this.cartLink);
  }
}