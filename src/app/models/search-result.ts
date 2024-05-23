import { RepositoryItem } from './repository-item.model';

export interface SearchResult {
  total_count: number;
  items: RepositoryItem[];
}
