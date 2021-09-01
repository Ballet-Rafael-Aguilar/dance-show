import { MatToolbarComponent } from './mat-toolbar.component';
import { MaterialModule } from '../../material.module';
export default {
    title: 'MatToolbarComponent'
};
export const primary = () => ({
    moduleMetadata: {
        imports: [MaterialModule]
    },
    component: MatToolbarComponent,
    props: {
        config: { toggleMenu: () => { } },
    }
});
//# sourceMappingURL=mat-toolbar.component.stories.js.map