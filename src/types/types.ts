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
export interface ArticleRes {
  id: number;
  title: string;
  content: string;
  text: string;
  imageUrl: string;
  author: string;
  createdAt: string;
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
  author: string;
  createdAt: string;
}

//Book types
export interface Book {
  id: number;
  name: string;
  pdfUrl: string;
  author: string;
  language: string;
  description: string;
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

export interface BookByidData {
  id?: number;
  name: string;
  pdfUrl: string;
  author: string;
  language: string;
  pageCount: number;
  imageUrl: string;
  description?: string;
}

export interface BookByIdResponse {
  message: string;
  data: BookByidData;
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

export interface FaqRes {
  id?: number;
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

export interface FindAllContactUsResponse {
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

//Partners Controller

export interface PartnerItem {
  id: number;
  name: string;
  imageUrl: string;
}

export interface GetPartnerByIdResponse {
  message: string;
  data: PartnerItem;
}

export interface PartnerData {
  data: PartnerItem[];
  totalElements: number;
  lastPageNumber: number;
  hasNextPage: boolean;
}

export interface GetAllPartnersResponse {
  message: string;
  data: PartnerData;
}

//Suggestion api requests

export interface SuggestionRes {
  id: number;
  email: string;
  message: string;
  createdAt: string;
}

export interface SuggestionReq {
  email: string;
  message: string;
}

//Subscription api requests

export interface SubscriptionReq {
  email: string;
}

export interface SubscriptionRes {
  id: number;
  email: string;
}

export interface GetAllSubscriptionsResponse {
  message: string;
  data: {
    data: SubscriptionRes[];
    totalElements: number;
    lastPageNumber: number;
    hasNextPage: boolean;
  };
}

export interface GetSubscriptionByIdResponse {
  message: string;
  data: SubscriptionRes;
}

// Sign up
export interface CreateUserReq {
  fullName: string;
  email: string;
  password: string;
}

//quotes api

export interface GetRandomQuotesRes {
  id: number; // ya da bigint, duruma göre
  text: string;
  author: string;
}

export interface UserLoginReq {
  email: string;
  password: string;
}

export interface User {
  accessToken: string;
  refreshToken: string;
  dateOfBirth: string | null;
  description: string | null;
  email: string;
  fullName: string;
  id: number;
  phone: string | null;
  position: string;
  profileImage: string | null;
  role: string;
}

export interface UpdateUserRequest {
  userId: number;
  data: {
    fullName: string;
    position: string;
    description: string;
    email: string;
  };
}

// team-controller api

export interface TeamMember {
  id?: number;
  name: string;
  surname: string;
  position: string;
  description: string;
  imageUrl: string;
}

export interface GetAllTeamResponse {
  message: string;
  data: {
    data: TeamMember[];
    totalElements: number;
    lastPageNumber: number;
    hasNextPage: boolean;
  };
}

export interface GetEmployeeByIdResponse {
  message: string;
  data: TeamMember;
}

export interface CategoriesResponse {
  id: number;
  name: string;
}

export interface Podcast {
  id: number;
  speakerName: string;
  topicTitle: string;
  description: string;
  imageUrl: string;
  youtubeUrl: string;
}

interface PodcastData {
  data: Podcast[];
  totalElements: number;
  lastPageNumber: number;
  hasNextPage: boolean;
}

export interface PodcastResponse {
  message: string;
  data: PodcastData;
}

export interface Trainer {
  id: number;
  name: string;
  surname: string;
  position: string;
  description: string;
  imageUrl: string;
}

interface TrainersData {
  data: Trainer[];
  totalElements: number;
  lastPageNumber: number;
  hasNextPage: boolean;
}

export interface TrainerResponse {
  message: string | null;
  data: TrainersData;
}

export type Person = {
  name: string;
  surname: string;
  position: string;
  description: string;
  imageUrl?: string;
};

export interface Lesson {
  id?: number;
  title: string;
  moduleId?: number;
  orderNumber: number;
  contentHtml: string;
}

export interface Module {
  id: number;
  title: string;
  orderNumber: number;
  lessons: Lesson[];
}

export interface ModuleRequest {
  title: string;
  orderNumber: number;
  courseId: number;
}

export interface Training {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  publishedAt: string;
  authorName?: string;
  authorAvatarUrl?: string;
  categoryName?: string;
  modules?: Module[];
}

export interface Answers {
  id?: number;
  content: string;
  isCorrect?: boolean;
}

export interface Question {
  id?: number;
  content: string;
  answers: Answers[];
}

export interface QuizData {
  sessionId: number;
  quizId: number;
  durationInMinutes: number;
  questions: Question[];
}

//Finish quiz request

export interface QuizApiResponse {
  message: string | null;
  data: QuizData;
}

export interface Answer {
  sessionId: number;
  questionId: number;
  answerId: number;
}

export interface AnswerSubmissionRequest {
  sessionId: number;
  answers: Answer[];
}

//Finish quiz response
export interface QuizSessionResponse {
  message: string;
  data: QuizSession;
}

export interface QuizSession {
  id: number;
  userId: number;
  quizId: number;
  startTime: string;
  endTime: string;
  isCompleted: boolean;
  isPassed: boolean;
  correctAnswerCount: number;
  scorePercentage: number;
  answers: SessionAnswer[];
}

export interface SessionAnswer {
  id: number;
  sessionId: number;
  questionId: number;
  answerId: number;
}

export interface CertificateResponse {
  id: number;
  userId: number;
  trainingId: number;
  pdfUrl: string;
}

// Cavab modelini təsvir edir

// Quiz və ya imtahan modelini təsvir edir
export interface Quiz {
  id?: number;
  trainingId: number | null;
  totalQuestions: number | null;
  passPercentage: number;
  durationInMinutes: number;
  questions: Question[];
}

// Əsas cavab strukturu (bir neçə quiz ola bilər)
export interface QuizResponse {
  content: Quiz[];
}

interface AnswerPost {
  content: string;
  isCorrect: boolean;
}

interface QuestionPost {
  content: string;
  answers: AnswerPost[];
}

export interface QuizPostBody {
  trainingId: number;
  totalQuestions: number;
  passPercentage: number;
  durationInMinutes: number;
  questions: QuestionPost[];
}

export interface TrainingReview {
  trainingId: number;
  rating: number;
  comment: string;
  createdAt: string;
}
