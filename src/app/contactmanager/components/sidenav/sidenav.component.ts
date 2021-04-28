import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';

const SMALL_WIDTH_BREAKPOINT = 720;
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  isScreenSmall = true;

  constructor(private breakPointObserver: BreakpointObserver) { }

  ngOnInit(): void {
    this.breakPointObserver
      // .observe([Breakpoints.XSmall]);
      .observe([`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`])
      .subscribe(state => {
        this.isScreenSmall = state.matches;
      });
  }

}
