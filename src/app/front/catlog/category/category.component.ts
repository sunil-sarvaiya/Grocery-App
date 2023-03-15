import { Component } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent {[x: string]: any;

  catArray:any=[
  
      {category:'Fruit', cat_name:'orange', quantity:500, price:2, img:'/assets/orange.jpeg'},
      {category:'vagetable', cat_name:'potato', quantity:500, price:2, img:'/assets/potato.jpeg'},
      {category:'Fruit', cat_name:'Strawberry', quantity:500, price:2, img:'/assets/straberry.jpeg'},
      {category:'vagetable', cat_name:'carrot', quantity:500, price:2, img:'/assets/carrot.png'},
      {category:'Fruit', cat_name:'apple', quantity:500, price:2, img:'/assets/apple.jpeg'},
      

  
  ];

  filteredPeople = this.catArray;

  filterPeopleByAge(category: string) {
    this.filteredPeople = this.catArray.filter((catArray: { category: string; }) => catArray.category >= category);
  }
}
