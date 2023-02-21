import { Component } from '@angular/core';

import { products } from '../kaspi';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  products = products;

  share(link?:string) {
    window.location.href = 'https://t.me/share/url?url='+link;
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}
