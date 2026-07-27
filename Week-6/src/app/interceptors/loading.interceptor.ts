import { inject } from '@angular/core';
import { HttpInterceptorFn } from '@angular/common/http';
import { finalize } from 'rxjs';
import { LoadingService } from '../services/loading.service';

export const loadingInterceptor: HttpInterceptorFn = (req, next) => {
  const loadingService = inject(LoadingService);
  loadingService.show();

  // finalize runs whether the Observable completes or errors — equivalent to
  // a try/catch/finally block, and the correct place to hide a spinner.
  return next(req).pipe(finalize(() => loadingService.hide()));
};
