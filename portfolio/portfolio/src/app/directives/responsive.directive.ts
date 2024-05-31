import { Directive, ElementRef } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Directive({
  selector: '[appResponsive]',
})
export class ResponsiveDirective {
  constructor(
    private element: ElementRef,
    private breakpointObserver: BreakpointObserver
  ) {
    this.breakpointObserver
      .observe([Breakpoints.HandsetPortrait, Breakpoints.WebLandscape])
      .subscribe({
        next: (result: any) => {
          for (let breakpoint of Object.keys(result.breakpoints)) {
            if (result.breakpoints[breakpoint]) {
              if (breakpoint === Breakpoints.HandsetPortrait) {
                this.element.nativeElement.classList.remove('pc');
              }
              if (breakpoint === Breakpoints.WebLandscape) {
                this.element.nativeElement.classList.add('pc');
              }
            }
          }
        },
      });
  }
}

// this.breakpointObserver.observe([
//   // Breakpoints.XSmall,
//   // Breakpoints.Small,
//   // Breakpoints.Medium,
//   // Breakpoints.Large,
//   // Breakpoints.XLarge,
//   // Breakpoints.HandsetLandscape,
//   Breakpoints.HandsetPortrait,
//   // Breakpoints.TabletLandscape,
//   // Breakpoints.TabletPortrait,
//   Breakpoints.WebLandscape,
//   // Breakpoints.WebPortrait
// ])
// .subscribe((result: BreakpointState) => {

//   // if (result.breakpoints[Breakpoints.XSmall]) {
//   //   this.currentScreenSize = 'XSmall';
//   // } else if (result.breakpoints[Breakpoints.Small]) {
//   //   this.currentScreenSize = 'Small';
//   // } else if (result.breakpoints[Breakpoints.Medium]) {
//   //   this.currentScreenSize = 'Medium';
//   // } else if (result.breakpoints[Breakpoints.Large]) {
//   //   this.currentScreenSize = 'Large';
//   // } else if (result.breakpoints[Breakpoints.XLarge]) {
//   //   this.currentScreenSize = 'XLarge';
//   // }
// });
