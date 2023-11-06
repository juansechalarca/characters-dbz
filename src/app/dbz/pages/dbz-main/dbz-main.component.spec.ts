import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DbzMainComponent } from './dbz-main.component';

describe('DbzMainComponent', () => {
  let component: DbzMainComponent;
  let fixture: ComponentFixture<DbzMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DbzMainComponent]
    });
    fixture = TestBed.createComponent(DbzMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
