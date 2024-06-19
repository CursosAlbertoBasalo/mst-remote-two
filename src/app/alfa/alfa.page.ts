import { Component, inject } from '@angular/core';
import { PlatformStore } from '@mst/srv';

@Component({
  standalone: true,
  template: ` <p>alfa works!</p>
    <button (click)="onChangeClick()">Change data</button>`,
})
export default class AlfaPage {
  #platform = inject(PlatformStore);

  onChangeClick() {
    this.#platform.patchData({ appName: 'ALFA New App Name' });
  }
}
