import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'ui-loader',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [
    `
      :host {
        display: grid;
        place-items: center;
        min-width: 150px;
        min-height: 150px;
      }
      :host.center-viewport {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
      :host.center-row {
        width: 100%;
      }
      .loading {
        width: 3rem;
        height: 3rem;
        border-radius: var(--theme-borderRadius-circle);
        background-color: var(--palette-primary-dark);
        box-shadow: -5rem 0 0 var(--palette-primary-main);
        animation: circle-classic 1s ease-in-out infinite alternate;
      }
      @keyframes circle-classic {
        0% {
          opacity: 0.1;
          transform: rotate(0deg) scale(0.5);
        }
        100% {
          opacity: 1;
          transform: rotate(360deg) scale(1.2);
        }
      }
    `,
  ],
  template: `<div class="loading"></div>`,
  encapsulation: ViewEncapsulation.Emulated
})
export class LoaderComponent {
  @HostBinding('class.center-viewport')
  @Input()
  centerViewport = false;
  @HostBinding('class.center-row')
  @Input()
  centerRow = false;
}
