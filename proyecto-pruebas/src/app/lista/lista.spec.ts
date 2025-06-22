import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListaComponent } from './lista';

describe('ListaComponent', () => {
  let fixture: ComponentFixture<ListaComponent>;
  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [ListaComponent] });
    fixture = TestBed.createComponent(ListaComponent);
  });

  it('comienza vacía', () => {
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelectorAll('li').length).toBe(0);
  });
  it('muestra 3 elementos', () => {
    fixture.componentInstance.items = ['A', 'B', 'C'];
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelectorAll('li').length).toBe(3);
  });
  it('primer elemento contiene "B"', () => {
    fixture.componentInstance.items = ['A', 'B', 'C'];
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelectorAll('li')[1].textContent).toBe('B');
  });
  it('se actualiza la lista', () => {
    fixture.componentInstance.items = ['X', 'Y'];
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelectorAll('li').length).toBe(2);
  });
  it('maneja elementos vacíos', () => {
    fixture.componentInstance.items = ['','Z'];
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelectorAll('li')[0].textContent).toBe('');
  });
});
