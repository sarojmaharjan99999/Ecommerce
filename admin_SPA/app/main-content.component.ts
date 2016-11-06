import { Component } from '@angular/core';

@Component({
    selector: 'main-content',
    template: `
            <main id="main">
                <h2>This is main content</h2>
                <router-outlet></router-outlet>
             </main>
       `,
    styles:[`
          #main {
               padding: 70px 0 0 230px;
               overflow: hidden;
               background: honeydew;
               height: 100vh;
          }
          h2{
            text-align: center;
          }
    `]
})

export class MainComponent { }