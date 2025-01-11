import { trigger, transition, style, query, group, animateChild, animate } from '@angular/animations';

export const slideInAnimation = trigger('routeAnimations', [
  transition(
    (fromState, toState) => {
      // Define la dirección del movimiento basándote en el orden de las rutas
      const routeOrder = [
        'AboutMePage',
        'SkillsPage',
        'ProjectsPage',
        'ContactPage',
      ];
      return routeOrder.indexOf(fromState) < routeOrder.indexOf(toState);
    },
    [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
        }),
      ]),
      query(':enter', [style({ left: '100%' })], { optional: true }),
      query(':leave', animateChild(), { optional: true }),
      group([
        query(':leave', [animate('300ms ease-out', style({ left: '-100%' }))], {
          optional: true,
        }),
        query(':enter', [animate('300ms ease-out', style({ left: '0%' }))], {
          optional: true,
        }),
      ]),
    ]
  ),
  transition(
    (fromState, toState) => {
      const routeOrder = [
        'AboutMePage',
        'SkillsPage',
        'ProjectsPage',
        'ContactPage',
      ];
      return routeOrder.indexOf(fromState) > routeOrder.indexOf(toState);
    },
    [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
        }),
      ]),
      query(':enter', [style({ left: '-100%' })], { optional: true }),
      query(':leave', animateChild(), { optional: true }),
      group([
        query(':leave', [animate('300ms ease-out', style({ left: '100%' }))], {
          optional: true,
        }),
        query(':enter', [animate('300ms ease-out', style({ left: '0%' }))], {
          optional: true,
        }),
      ]),
    ]
  ),
]);