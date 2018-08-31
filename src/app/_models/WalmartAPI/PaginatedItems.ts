import {PaginatedItem} from './PaginatedItem';
import {Category} from './Category';

export class PaginatedItems {
  category: Category;
  items: PaginatedItem[];
  totalPages: string;
}
