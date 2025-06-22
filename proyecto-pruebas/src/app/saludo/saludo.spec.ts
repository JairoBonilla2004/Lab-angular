import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SaludoComponent } from './saludo';

describe('SaludoComponent', () => {
  let fixture: ComponentFixture<SaludoComponent>;
  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [SaludoComponent] });
    fixture = TestBed.createComponent(SaludoComponent);
    fixture.detectChanges();
  });

  it('usa valor por defecto', () => {
    expect(fixture.nativeElement.querySelector('#saludo').textContent).toBe('Hola Mundo!');
  });
  it('muestra nombre “Angular”', () => {
    fixture.componentInstance.nombre = 'Angular';
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('#saludo').textContent).toBe('Hola Angular!');
  });
  it('maneja nombre vacío', () => {
    fixture.componentInstance.nombre = '';
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('#saludo').textContent).toBe('Hola !');
  });
  it('cambia nombre dinámicamente', () => {
    fixture.componentInstance.nombre = 'Test';
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('#saludo').textContent).toBe('Hola Test!');
  });
  it('no genera null para nombre undefined', () => {
  // @ts-ignore
  fixture.componentInstance.nombre = undefined;
  fixture.detectChanges();
  expect(fixture.nativeElement.querySelector('#saludo').textContent).toBe('Hola !');
});

});
