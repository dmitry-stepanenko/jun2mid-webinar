import { of, OperatorFunction } from "rxjs";
import { catchError, retryWhen, startWith } from "rxjs/operators";
import { genericRetryStrategy } from "./generic-retry-strategy";

export function handleHttpError<T>(defaultValue: T): OperatorFunction<T, T> {
    return src$ => src$.pipe(
        startWith(defaultValue),
        retryWhen(genericRetryStrategy()),
        catchError(() => {
          return of(defaultValue);
        })
    )
}
