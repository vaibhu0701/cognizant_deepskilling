import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="not-found">
      <h2>404 — Page Not Found</h2>
      <p>The page you're looking for doesn't exist.</p>
      <a routerLink="/">Go back home</a>
    </div>
  `,
  styles: [`.not-found { text-align: center; margin-top: 3rem; }`],
})
export class NotFoundComponent {}
