import { Component, OnInit } from '@angular/core';
import {ProdusDisponibil, PseudoApiService} from "../../pseudo-api.service";
import {Subscription} from "rxjs";
import {Service} from "../../services/service";

@Component({
  selector: 'app-right-screen',
  templateUrl: './right-screen.component.html',
  styleUrls: ['./right-screen.component.scss']
})
export class RightScreenComponent implements OnInit {

  public coffees: ProdusDisponibil[] = [];
  public receivedId: number = 0;


  constructor(private service: Service, private pseudoApiService :PseudoApiService) { }

  ngOnInit(): void {
    // @ts-ignore
    this.service.sub({
      next: (id: number) => {
        this.receivedId = id;
        console.log("din right screen component: " + this.receivedId);
      }
    });

    this.getCoffesByCoffeShopId();
  }

  getCoffesByCoffeShopId(): void{
    this.pseudoApiService.ProduseDisponibile(this.receivedId).subscribe({
      next: (data) => {
        this.coffees = data;
        console.log("cafele"+ this.coffees);
      }
    })
  }



}
