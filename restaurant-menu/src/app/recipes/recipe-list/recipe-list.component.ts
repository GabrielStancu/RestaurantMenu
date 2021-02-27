import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test',
      'https://www.lauralaurentiu.ro/wp-content/uploads/2019/01/tocanita-de-porc-reteta-pas-cu-pas-reteta-tocanita-din-carne-de-porc-475x317.jpg'),
      new Recipe('A Test Recipe 2', 'This is simply a test 2',
      'https://www.lauralaurentiu.ro/wp-content/uploads/2017/11/ciulama-de-pui-cu-ciuperci-si-smantana-reteta-video-cum-se-face-ciulama-de-pui-cu-ciuperci-pas-cu-pas-475x317.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
