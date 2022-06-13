import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Item } from 'src/app/models/item';
import {MatSort} from '@angular/material/sort';
import { ItemService } from 'src/app/services/item/item.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  dataSource!: Observable<any>;
  clickedRows = new Set<Item>();
  displayedColumns: string[] = ['name', 'price', 'amount', 'category', 'edit', 'delete', 'check'];
  

  constructor(private router: Router, private db: ItemService) { }

  ngOnInit(): void {
    if(localStorage.getItem('user') == null){
      this.router.navigateByUrl('/login')
    }
    this.dataSource = this.db.getAll();
    console.log(this.dataSource)
  }

  createNewEntry(){
    this.router.navigateByUrl('/include')
  }

  edit(element: any){
  }

  delete(element: any){
    this.db.delete(element.key)
  }

  check(element: any){
    this.db.check(element.key)
  }
}
