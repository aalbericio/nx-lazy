import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'lazy-test-route-a',
    template: '<span>Route A</span>',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class RouteAComponent {

}
