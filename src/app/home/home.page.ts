import { Component, ViewChild } from '@angular/core';
import { CardComponent } from '../components/card/card.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild(CardComponent) randomUserCard?: CardComponent;

  handleRefresh(event: any) {
    this.randomUserCard
      ?.fetchRandomuserAPIFromService()
      .then(() => {
        event.target.complete();
      })
      .catch((error)=>{
        alert(error);
        event.target.complete;
      });
  }

  constructor() {}
}
