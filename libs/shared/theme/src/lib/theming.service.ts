import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {OverlayContainer} from '@angular/cdk/overlay';

const DEFAULT_THEME = 'default-theme';

export type Theme = typeof DEFAULT_THEME | 'dark-theme';

@Injectable({
  providedIn: 'root'
})
export class ThemingService {
  previousSelected = '';
  private selectedTheme: BehaviorSubject<string> = new BehaviorSubject<string>('');
  selected = this.selectedTheme.asObservable();

  constructor(private overlayContainer: OverlayContainer) {
    this.setTheme(DEFAULT_THEME);
  }

  setTheme(selectedTheme: Theme) {
    this.setCustomTheme(selectedTheme);
    this.previousSelected = selectedTheme;
  }

  private setCustomTheme(selectedTheme: Theme) {
    this.selectedTheme.next(selectedTheme);
    this.setOverlay(selectedTheme);
  }

  private setOverlay(theme: string) {
    const overlayContainerClasses = this.overlayContainer.getContainerElement().classList;
    const themeClassesToRemove = Array.from(overlayContainerClasses).filter((item: string) => item.includes('-theme'));
    if (themeClassesToRemove.length) {
      overlayContainerClasses.remove(...themeClassesToRemove);
    }
    if (theme) {
      overlayContainerClasses.add(theme);
    }
  }
}
