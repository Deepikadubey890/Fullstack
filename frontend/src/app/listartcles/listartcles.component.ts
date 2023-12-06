import { Component } from '@angular/core';
import { ArticlesService } from '../services/articles.service';

@Component({
  selector: 'app-listartcles',
  templateUrl: './listartcles.component.html',
  styleUrls: ['./listartcles.component.scss']
})
export class ListartclesComponent {
  
  
    articles:any;
    constructor(private articleservice:ArticlesService){
    
    }
    
    ngOnInit(){
    this.ArticleList()
    }
    
    ArticleList(){
    this.articles = this.articleservice.listarticles().subscribe(article => {
      this.articles = article
      console.log(this.articles);
    })
    }
    
}
