import { Component, OnInit } from '@angular/core';
import {TreeNode} from "primeng/api";
import {PseudoApiService} from "../../pseudo-api.service";
import {CafeneaSauLocalitate} from "../../cafeneasaulocalitate";
import {filter, map} from "rxjs";

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent implements OnInit {

  public listaLocalitati: CafeneaSauLocalitate[] = [];
  public listaCafenele: CafeneaSauLocalitate[] = [];
  public listaJudete: CafeneaSauLocalitate[] = [];

  public tree: TreeNode[] = [
    {
      "label": "Localitati sau cafenele",
      "data": "Documents Folder",
      "expandedIcon": "pi pi-folder-open",
      "collapsedIcon": "pi pi-folder",
      "children": [
        {
          "label": "Judete",
          "data": "Work Folder",
          "expandedIcon": "pi pi-folder-open",
          "collapsedIcon": "pi pi-folder",
          "children": []
        },
        {
        "label": "Localitati",
        "data": "Work Folder",
        "expandedIcon": "pi pi-folder-open",
        "collapsedIcon": "pi pi-folder",
        "children": []
        },
        {
          "label": "Cafenele",
          "data": "Work Folder",
          "expandedIcon": "pi pi-folder-open",
          "collapsedIcon": "pi pi-folder",
          "children": []
        }]
    }
  ]

  constructor(private service: PseudoApiService) { }


  ngOnInit(): void {
    this.service.ListaLocalitati().subscribe({
      next: (lista) => {
        this.listaLocalitati = lista.filter(localitate => localitate.idParinte !== null && localitate.fel === "L");
        this.listaCafenele = lista.filter(cafenea => cafenea.fel === "C");
        this.listaJudete = lista.filter(judet => judet.idParinte === null && judet.fel === "L")

        this.listaJudete.forEach(judet => {
          // @ts-ignore
          this.tree[0].children[0].children.push({
            label: judet.denumire,
            data: 'Work Folder',
            icon: 'pi pi-fw pi-cog',
          })
        })

        this.listaLocalitati.forEach(loc => {
          // @ts-ignore
          this.tree[0].children[1].children.push({
            label: loc.denumire,
            data: 'Work Folder',
            icon: 'pi pi-fw pi-cog',
          })
        });

        this.listaCafenele.forEach(cafenea => {
          // @ts-ignore
          this.tree[0].children[2].children.push({
            label: cafenea.denumire,
            data: 'Work Folder',
            icon: 'pi pi-fw pi-cog',
          })
        })
      }
    });
  }

}
