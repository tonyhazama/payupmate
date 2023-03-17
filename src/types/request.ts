export interface PaginationQueryInput {
  page?: number;
  size?: number;
}

export interface PaginationType {
  size: number;
  total: number;
  page: number;
  totalPage: number;
}
