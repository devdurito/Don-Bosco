import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Nosotroscomponent } from './nosotroscomponent';

describe('Nosotroscomponent', () => {
  let component: Nosotroscomponent;
  let fixture: ComponentFixture<Nosotroscomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Nosotroscomponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Nosotroscomponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
