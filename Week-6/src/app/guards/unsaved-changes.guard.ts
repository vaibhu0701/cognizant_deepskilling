import { CanDeactivateFn } from '@angular/router';

// Any component that can lose unsaved data implements this interface
// so the guard stays generic and reusable across forms.
export interface CanComponentDeactivate {
  canDeactivate: () => boolean;
}

export const unsavedChangesGuard: CanDeactivateFn<CanComponentDeactivate> = (component) => {
  if (component.canDeactivate && !component.canDeactivate()) {
    return window.confirm('You have unsaved changes. Leave?');
  }
  return true;
};
