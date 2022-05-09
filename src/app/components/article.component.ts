import { Component } from '@angular/core';

@Component({
    selector: 'app-article',
    template: '<h2> Mon article</h2>'
})

export class ArticleComponent {
    tittle: string = "Mon Article"; 
}