import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'lazy-test-route-b',
    template: '<span>Route B</span>',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class RouteBComponent {

}
