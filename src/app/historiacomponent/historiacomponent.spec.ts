import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { Historiacomponent } from './historiacomponent';

describe('Historiacomponent', () => {
  let component: Historiacomponent;
  let fixture: ComponentFixture<Historiacomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Historiacomponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(Historiacomponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
