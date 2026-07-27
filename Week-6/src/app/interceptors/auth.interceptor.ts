import { HttpInterceptorFn } from '@angular/common/http';

// Interceptors run in the order they're registered on the request path,
// and in reverse order on the response path.
export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const clonedRequest = req.clone({
    setHeaders: { Authorization: 'Bearer mock-token-12345' },
  });
  return next(clonedRequest);
};
