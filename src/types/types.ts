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

interface Book {
  id: number;
  name: string;
  pdfUrl: string;
  author: string;
  language: string;
  pageCount: number;
  imageUrl: string;
}

interface BookData {
  data: Book[];
  totalElements: number;
  lastPageNumber: number;
  hasNextPage: boolean;
}

export interface GetAllBookResponse {
  message: string;
  data: BookData;
}

interface BookByidData {
  id: number;
  name: string;
  pdfUrl: string;
  author: string;
  language: string;
  pageCount: number;
  imageUrl: string;
}

export interface BookByIdResponse {
  message: string;
  data: BookByidData;
}
