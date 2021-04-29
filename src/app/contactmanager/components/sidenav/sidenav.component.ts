import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

const SMALL_WIDTH_BREAKPOINT = 720;
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  isScreenSmall = true;
  users$ = this.userService.users$;

  constructor(
    private breakPointObserver: BreakpointObserver,
    private userService: UserService
    ) { }

  ngOnInit(): void {
    this.breakPointObserver
      // .observe([Breakpoints.XSmall]);
      .observe([`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`])
      .subscribe(state => {
        this.isScreenSmall = state.matches;
      });

    this.userService.loadAll();
    this.users$.subscribe(data => console.log(data));
  }

}
