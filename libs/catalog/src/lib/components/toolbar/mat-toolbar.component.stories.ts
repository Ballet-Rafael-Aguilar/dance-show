import { BalletToolbarComponent } from './ballet-toolbar.component';
import { CatalogModule } from '../../catalog.module';

export default {
  title: 'MatToolbarComponent'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [CatalogModule]
  },
  component: BalletToolbarComponent,
  props: {
    config: { toggleMenu: () => {} },
  }
})
