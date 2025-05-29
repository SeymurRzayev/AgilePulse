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
