import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { Product } from '../product.model';

@Component({
  selector: 'CaipiraDev-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product = {
    name: '',
    price: 0.0
  }
  constructor(
    private procuctService: ProductService,
    private router: Router
    ) { }

  ngOnInit(): void {
    
  }
  createProduct(): void {
    this.procuctService.create(this.product).subscribe(() => {
      this.procuctService.showMessage('Operação realizada com sucesso')
      this.cancelProduct()
    })
  }
  cancelProduct(): void {
    this.router.navigate(['/products'])
  }
}
