import {
  animate,
  query,
  stagger,
  style,
  transition,
  trigger
} from '@angular/animations';

export const listAnimation = (element: string) => {
  return trigger('listAnimation', [
    transition(':enter', [
      query(
        element,
        [
          style({ opacity: 0, transform: 'translateY(-50px)' }),
          stagger(300, [animate(300)]),
        ],
        {
          optional: true,
        }
      ),
    ]),
  ]);
};
