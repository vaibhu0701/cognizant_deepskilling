import { CanDeactivateFn } from '@angular/router';
import { CanComponentDeactivate } from './can-deactivate';

export const pendingChangesGuard: CanDeactivateFn<CanComponentDeactivate> =
(component) => {
  return component.canDeactivate();
};