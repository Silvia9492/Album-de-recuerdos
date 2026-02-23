import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitFormComponent } from './init-form.component';

describe('InitFormComponent', () => {
  let component: InitFormComponent;
  let fixture: ComponentFixture<InitFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InitFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InitFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
