import { Component } from '@angular/core';
import {Article} from'../model/article';
import {ArticleAddComponent } from "../article-add/article-add.component";

@Component({
  selector: 'app-articles-list',
  standalone: true,
  imports: [],
  templateUrl: './articles-list.component.html',
  styleUrl: './articles-list.component.css'
})
export class ArticlesListComponent {
  Articles = [
    new Article("1er article ", "photo1","03/11/2024","ph1", 0),
    new Article("2eme article ", "photo2","03/11/2024","ph2", 0),
    new Article("3eme article ", "photo3","03/11/2024","ph3", 0),
  ];
  chercher(titre: string) {
   this.Articles=this.Articles.filter(Article => Article.titre.includes(titre));

  }

  addarticle(newarticle: Article) {
   this.Articles.push(newarticle); 
  }

  up(article: Article) {
    article.incremente();
  }

  down(article: Article) {
    article.décremente();
  }
  action="";
  changeAction(action: string) {
    this.action = action;
  }
}
