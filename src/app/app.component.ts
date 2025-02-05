import { Component } from '@angular/core';
// import { ChildrenOutletContexts } from '@angular/router';
// import { slideInAnimation } from './animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    // slideInAnimation
  ]
})
export class AppComponent {
  title = 'mi-portafolio';

  // constructor(private contexts: ChildrenOutletContexts){}

  // getRouterAnimationData(){
  //   return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  //   }
}

