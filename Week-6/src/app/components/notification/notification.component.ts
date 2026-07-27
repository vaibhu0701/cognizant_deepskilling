import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [CommonModule],
  // Providing NotificationService here (rather than providedIn: 'root')
  // creates a new instance scoped to this component and its children,
  // instead of reusing the app-wide singleton.
  providers: [NotificationService],
  template: `
    <div class="notification-box">
      <button (click)="addMessage()">Notify me</button>
      <ul>
        <li *ngFor="let msg of notificationService.getMessages()">{{ msg }}</li>
      </ul>
    </div>
  `,
})
export class NotificationComponent {
  constructor(public notificationService: NotificationService) {}

  addMessage(): void {
    this.notificationService.notify('You have a new update — ' + new Date().toLocaleTimeString());
  }
}
