import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ArticlesService } from '../services/articles.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  article: any
  showMsg: boolean = false;

  articleForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  });

constructor(private articleservice:ArticlesService){

}
onSubmit(){
 this.articleservice.addarticles(this.articleForm.value).subscribe(
  article=> {
    this.article = article
    this.articleForm.reset();
    this.showMsg = true;
 })
 
 console.log(this.articleForm.value) 
  }

}
