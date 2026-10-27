import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { Publicacionescomponent } from './publicacionescomponent';

describe('Publicacionescomponent', () => {
  let component: Publicacionescomponent;
  let fixture: ComponentFixture<Publicacionescomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Publicacionescomponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(Publicacionescomponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
