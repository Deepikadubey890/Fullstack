import { Component } from '@angular/core';
import { ArticlesService } from '../services/articles.service';

@Component({
  selector: 'app-createform',
  templateUrl: './createform.component.html',
  styleUrls: ['./createform.component.scss']
})
export class CreateformComponent {
goToPage(arg0: string) {
throw new Error('Method not implemented.');
}
hide: any;
articles:any;
constructor(private articleservice:ArticlesService){

}

ngOnInit(){
this.ArticleList()
}

ArticleList(){
this.articles = this.articleservice.listarticles().subscribe(article => {
  this.articles = article
  console.log(this.articles)
})
}

}
