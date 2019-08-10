import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './Recipe-List.component.html',
  styleUrls: ['./Recipe-List.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    // tslint:disable-next-line:max-line-length
    new Recipe('A Test', 'Test Description', 'https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fit,w_760,h_950/k/Photo/Recipes/2019-07-recipe-best-chili-dogs/Best-Chili-Dogs-Backyard-BBQ-take2'),
    // tslint:disable-next-line:max-line-length
    new Recipe('A Test', 'Test Description', 'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/recipes/tangy_skillet_chicken_recipe/300x300_tangy_skillet_chicken_recipe.jpg?resize=300px:*')
  ];

  constructor() { }

  ngOnInit() {
  }

}
