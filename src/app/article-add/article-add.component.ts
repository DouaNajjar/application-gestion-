import { Component, EventEmitter, output } from '@angular/core';
import {Article} from'../model/article';
import {ArticlesListComponent} from "../articles-list/articles-list.component";

@Component({
  selector: 'app-article-add',
  standalone: true,
  imports: [],
  templateUrl: './article-add.component.html',
  styleUrl: './article-add.component.css'
})
export class ArticleAddComponent {
  @output() articleajouté =new EventEmitter<Article>();
  ajoutArticle(titre:string,photo:string,date:string,description:string,score:number){
    const newArticle =new Article(titre,photo,date,description,score);
    this.articleajouté.emit(newArticle);
  }
}
