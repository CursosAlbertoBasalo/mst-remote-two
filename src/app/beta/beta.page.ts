import { AsyncPipe, JsonPipe } from '@angular/common';
import { Component, InputSignal, inject, input } from '@angular/core';
import { PlatformStore } from '@mst/srv';
@Component({
  standalone: true,
  imports: [AsyncPipe, JsonPipe],
  template: `
    <h3>beta works with signal params:</h3>
    <pre>Param q= {{ q() }}</pre>
    <p>With data from platform store: {{ data().appName }}</p>
  `,
})
export default class BetaPage {
  q: InputSignal<string> = input<string>('no params');
  #platform = inject(PlatformStore);
  data = this.#platform.data;
}
