import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Historiacomponent } from './historiacomponent';

describe('Historiacomponent', () => {
  let component: Historiacomponent;
  let fixture: ComponentFixture<Historiacomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Historiacomponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Historiacomponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
