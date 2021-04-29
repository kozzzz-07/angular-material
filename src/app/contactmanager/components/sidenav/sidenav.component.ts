import { Direction } from '@angular/cdk/bidi/public-api';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { Router } from '@angular/router';
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
  isDarkTheme = false;
  dir: Direction = 'ltr';

  constructor(
    private breakPointObserver: BreakpointObserver,
    private userService: UserService,
    private router: Router
    ) { }

  @ViewChild(MatDrawer)matDrawer!: MatDrawer;

  ngOnInit(): void {
    this.breakPointObserver
      // .observe([Breakpoints.XSmall]);
      .observe([`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`])
      .subscribe(state => {
        this.isScreenSmall = state.matches;
      });

    this.userService.loadAll();
    this.users$.subscribe(data => {
      if (data.length) {
        // リロードしたタイミングでデータが流れた際、取得した初期idへの自動ナビゲート
        this.router.navigate(['/contactmanager', data[0].id]);
      }
    });

    this.router.events.subscribe(() => {
      if (this.isScreenSmall) {
        this.matDrawer.close();
      }
    });
  }

  toggleTheme(): void {
    this.isDarkTheme = !this.isDarkTheme;
  }

  toggleDir(): void {
    this.dir = this.dir === 'ltr' ? 'rtl' : 'ltr';
  }
}
