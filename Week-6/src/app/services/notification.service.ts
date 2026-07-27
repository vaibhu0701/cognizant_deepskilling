import { Injectable } from '@angular/core';

// NOT providedIn: 'root'. When this service is listed in a component's
// `providers` array instead, Angular creates a brand-new instance scoped to
// that component (and its children) rather than sharing the app-wide singleton.
// That is useful whenever a piece of state should be isolated per component
// instance — e.g. a notification banner whose messages shouldn't leak between
// different places the component is used.
@Injectable()
export class NotificationService {
  private messages: string[] = [];

  notify(message: string): void {
    this.messages.push(message);
  }

  getMessages(): string[] {
    return [...this.messages];
  }
}
