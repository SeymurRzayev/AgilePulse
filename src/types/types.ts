//Articles types

export interface GetAllArticleResponse {
  message: string;
  data: {
    data: ArticleRes[];
    totalElements: number;
    lastPageNumber: number;
    hasNextPage: boolean;
  };
}
interface ArticleRes {
  id: number;
  title: string;
  content: string;
  text: string;
  imageUrl: string;
}

export interface GetByIdArticle {
  message: string;
  data: ArticleByIdRes;
}

interface ArticleByIdRes {
  id: number;
  title: string;
  content: string;
  text: string;
  imageUrl: string;
}



//FAQ types

export interface GetAllFaqResponse {
  message: string;
  data: {
    data: FaqRes[];
    totalElements: number;
    lastPageNumber: number;
    hasNextPage: boolean;
  };
}

interface FaqRes {
  id: number;
  question: string;
  answer: string;
}

export interface GetByIdFaq {
  message: string;
  data: FaqByIdRes;
}

interface FaqByIdRes {
  id: number;
  question: string;
  answer: string;
}


//Contact Us

export interface ContactUsEntry {
  id?: number;
  email: string;
  message: string;
  name: string;
  surname: string;
  createdAt?: string;
}

export interface SortInfo {
  unsorted: boolean;
  sorted: boolean;
  empty: boolean;
}

export interface Pageable {
  unpaged: boolean;
  paged: boolean;
  pageSize: number;
  pageNumber: number;
  offset: number;
  sort: SortInfo;
}

export interface ContactUsResponse {
  totalElements: number;
  totalPages: number;
  pageable: Pageable;
  numberOfElements: number;
  size: number;
  content: ContactUsEntry[];
  number: number;
  sort: SortInfo;
  first: boolean;
  last: boolean;
  empty: boolean;
}
