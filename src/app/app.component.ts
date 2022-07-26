import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RuntimeLocalizerService } from '@deejayy/runtime-localizer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  constructor(private runtimeLocalizerService: RuntimeLocalizerService) {}

  public setLang(lang: string) {
    this.runtimeLocalizerService.saveLocale(lang, true);
  }
}
