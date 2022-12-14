import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSubscribeComponent } from './user-subscribe.component';

describe('UserSubscribeComponent', () => {
  let component: UserSubscribeComponent;
  let fixture: ComponentFixture<UserSubscribeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserSubscribeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserSubscribeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
