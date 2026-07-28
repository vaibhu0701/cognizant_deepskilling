import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [CommonModule],

  providers: [NotificationService],

  /*
  Component-level provider creates a NEW
  NotificationService instance that belongs
  only to this component and its children.
  */

  templateUrl: './notification.html',
  styleUrls: ['./notification.css']
})
export class Notification {

  constructor(public notification: NotificationService){}

}