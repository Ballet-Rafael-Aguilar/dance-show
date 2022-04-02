import { BalletToolbarComponent } from './ballet-toolbar.component';
import { CommonMoleculesModule } from '@ballet/common-molecules';

export default {
  title: 'MatToolbarComponent',
};

export const primary = () => ({
  moduleMetadata: {
    imports: [CommonMoleculesModule],
  },
  component: BalletToolbarComponent,
  props: {
    config: { toggleMenu: () => {} },
  },
});
