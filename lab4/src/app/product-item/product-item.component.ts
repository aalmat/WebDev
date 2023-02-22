import { Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import { Product } from '../kaspi';
// @ts-ignore
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product!: Product;
  @Output() redirect = new EventEmitter();
  @Output() open = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
