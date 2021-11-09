import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZyrisComponent } from './zyris.component';

describe('ZyrisComponent', () => {
  let component: ZyrisComponent;
  let fixture: ComponentFixture<ZyrisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZyrisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZyrisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
