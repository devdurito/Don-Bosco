import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Publicacionescomponent } from './publicacionescomponent';

describe('Publicacionescomponent', () => {
  let component: Publicacionescomponent;
  let fixture: ComponentFixture<Publicacionescomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Publicacionescomponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Publicacionescomponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
