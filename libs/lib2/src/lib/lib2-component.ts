import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'lazy-test-lib',
    template: '<router-outlet></router-outlet>',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class Lib2Component {

}
