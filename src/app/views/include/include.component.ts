import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from 'src/app/models/item';
import { ItemService } from 'src/app/services/item/item.service';

@Component({
  selector: 'app-include',
  templateUrl: './include.component.html',
  styleUrls: ['./include.component.css']
})
export class IncludeComponent implements OnInit {

  item: Item = new Item;

  constructor(private itemService: ItemService, private router: Router) { }

  ngOnInit(): void {
    this.item = new Item();
  }

  save(){
    this.itemService.insert(this.item);
    this.item = new Item();
  }

  cancel(){
    this.router.navigateByUrl('/list');
  }
}
