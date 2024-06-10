declare namespace Api {
  interface ResponseWithPagePaginate<T> {
    items: T[];
    page: number;
    pages: number;
    size: number;
    total: number;
  }

  interface ErrorDetail {
    msg: string;
  }

  interface ResponseError {
    data: {
      detail: string | ErrorDetail[];
    };
    status: number;
  }
}
