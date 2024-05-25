namespace trainer;

using {managed, cuid} from '@sap/cds/common';

entity training : managed, cuid {
//  id      : String(111);
  title   : String(111); 
  descr   : String(111);
  author  : String(111);
  genre   : String(111);
  stock   : String(111);
  trainee : String(111);
}
