import { BalletToolbarComponent } from './ballet-toolbar.component';
import { MoleculesModule } from '@ballet/molecules';

export default {
  title: 'MatToolbarComponent'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [MoleculesModule]
  },
  component: BalletToolbarComponent,
  props: {
    config: { toggleMenu: () => {} },
  }
})
