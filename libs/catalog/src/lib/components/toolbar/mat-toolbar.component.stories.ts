import { MatToolbarComponent } from './mat-toolbar.component';
import { CatalogModule } from '../../catalog.module';

export default {
  title: 'MatToolbarComponent'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [CatalogModule]
  },
  component: MatToolbarComponent,
  props: {
    config: { toggleMenu: () => {} },
  }
})
