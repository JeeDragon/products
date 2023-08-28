import { debounceTime, switchMap, takeUntil, skip } from "rxjs";


/**
 * My autocomplete custom rxjs pipable operator for to be used with autocomplete and debounce times.
 * @date 8/28/2023 - 4:50:24 PM
 *
 * @param {number} time
 * @param {*} selector
 * @returns {(source$: any) => any}
 */
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