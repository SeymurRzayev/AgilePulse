export interface ApiResponse {
  message: string;
  data: {
    data: ContentItem[];
    totalElements: number;
    lastPageNumber: number;
    hasNextPage: boolean;
  };
}

interface ContentItem {
  id: number;
  title: string;
  content: string;
  text: string;
  imageUrl: string;
}