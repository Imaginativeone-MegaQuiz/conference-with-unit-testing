import { async, TestBed } from '@angular/core/testing';
import { IonicModule, Platform } from 'ionic-angular';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ConferenceApp } from './app.component';
import {
  PlatformMock,
  StatusBarMock,
  SplashScreenMock
} from '../../test-config/mocks-ionic';

describe('ConferenceApp Component', () => {
  let fixture;
  let component: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ConferenceApp],
      imports: [
        IonicModule.forRoot(ConferenceApp)
      ],
      providers: [
        { provide: StatusBar, useClass: StatusBarMock },
        { provide: SplashScreen, useClass: SplashScreenMock },
        { provide: Platform, useClass: PlatformMock }
      ]
    })
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConferenceApp);
    component = fixture.componentInstance;
  });

  /* it('should be created', () => {
    expect(component instanceof ConferenceApp).toBe(true);
  }); */

  /* it('should have two pages', () => {
    expect(component.pages.length).toBe(2);
  }); */

});
