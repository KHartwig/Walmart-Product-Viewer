import {PaginatedItem} from './PaginatedItem';

export class PaginatedResponse {
  category: string;
  items: PaginatedItem[];
  totalPages: string;
}
