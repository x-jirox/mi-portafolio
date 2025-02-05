import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-load-page',
  templateUrl: './load-page.component.html',
  styleUrls: ['./load-page.component.css']
})
export class LoadPageComponent implements OnInit{
  isLoading: boolean = true; // Inicialmente, el loader estará activo

  ngOnInit() {
    setTimeout(() => {
      this.isLoading = false; // Oculta el loader después de 3 segundos (puedes ajustarlo)
    }, 3000);
  }  

}
