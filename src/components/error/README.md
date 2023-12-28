# Mini modifications in hooks.d.ts

```bash
  # from
  export declare function useRouteError(): unknown;

  # to
  export declare function useRouteError(): {
    data: string
    error: {
      message: string
      stack: string
    }
    internal: boolean
    status: number
    statusText: string
  };
```
