using { trainer as my } from '../db/data-model';

@path: 'my_cap'
service CatalogService {

  /** For displaying lists of trainers */
  entity Training as projection on my.training;

}