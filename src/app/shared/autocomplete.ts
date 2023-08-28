import { debounceTime, switchMap, takeUntil, skip } from "rxjs";

export const autocomplete = (time: number, selector:any) => (source$:any) => source$
  .pipe(
    debounceTime(time),
    switchMap((...args: any[]) => selector(args)
      .pipe(
        takeUntil(source$
          .pipe(skip(1))
        )
      )
    )
  );