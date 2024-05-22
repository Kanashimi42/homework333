import { Component, OnInit } from '@angular/core';
import { CardBlockComponent } from '../card-block/card-block.component';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cards-container',
  standalone: true,
  imports: [CardBlockComponent, NgFor, NgIf, FormsModule],
  templateUrl: './cards-container.component.html',
  styleUrl: './cards-container.component.css'
})
export class CardsContainerComponent implements OnInit {
  products = [
    {id: 1, name: 'product 1', price: 110, description: 'product1 text description', color: '#005b7c'},
    {id: 2, name: 'name 2', price: 120, description: 'product2 text description', color: '#008eab'},
    {id: 3, name: 'product 3', price: 130, description: 'product3 text description', color: '#01bcc6'},
    {id: 4, name: 'name 4', price: 140, description: 'product4 text description', color: '#d5d1ca'},
    {id: 5, name: 'product 5', price: 150, description: 'product5 text description', color: '#efefee'}
  ];

  indexId: number = 0;
  idInfoApp(newItem: number) {
    this.indexId = newItem - 1;
  }

  btnActiveF: boolean = false;
  discount: number = 100;
  applyDiscount(discount: number) {
    this.btnActiveF = true;
    this.discount = discount;
    this.products.forEach((element) => console.log(element.price));
  }
  
  filter: string = '';
  isProductsFound: boolean = false;
  filteredProductsCount: number = 3;
  GetFilteredProducts() {
    return this.products.filter(product => {
      return product.name.toLowerCase().includes(this.filter.toLowerCase());
    });
  }
  updateFilteredProducts() {
    const filteredProducts = this.GetFilteredProducts();
    this.isProductsFound = filteredProducts.length == 0 ? true : false;
    this.filteredProductsCount = filteredProducts.length;
  }
  getGridTemplateColumns() {
    if (this.filteredProductsCount <= 3 && this.filteredProductsCount > 0)
      return `repeat(${this.filteredProductsCount}, 1fr)`;
    else if (this.filteredProductsCount == 0)
      return `repeat(1, 1fr)`;
    return `repeat(3, 1fr)`;
  }

  decreasing() {
    this.products.sort((a, b) => a.price - b.price);
    this.updateFilteredProducts();
  }
  increasing() {
    this.products.sort((a, b) => b.price - a.price);
    this.updateFilteredProducts();
  }
  max() {
    this.products.sort((a, b) => b.price - a.price);
    this.products = [this.products[0]];
    this.updateFilteredProducts();
  }

  ngOnInit() {
  }
}