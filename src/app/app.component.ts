import { Component, OnInit } from '@angular/core';
import { PseudoApiService } from './pseudo-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ExAngular';

  constructor(private api: PseudoApiService)
  {
  }

  ngOnInit(): void {
    
    // Obtin lista cu toate cafenelele si toate localitatile
    this.api.ListaLocalitati().subscribe(lista => {
      console.log('Am obtinut lista', lista);
    })

    // Un apel asemanator acestuia va returna lista cu sortimentele de cafea per
    // cafenea
    this.api.ProduseDisponibile(8133).subscribe(cafele => {
      console.log('Am obtinut o lista cu cafele', cafele);
    })
  }
}
