import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ToggleComponent } from './toggle';

describe('ToggleComponent', () => {
  let fixture: ComponentFixture<ToggleComponent>;
  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [ToggleComponent] });
    fixture = TestBed.createComponent(ToggleComponent);
    fixture.detectChanges();
  });

  it('inicia en OFF', () => {
    expect(fixture.nativeElement.querySelector('#btn-toggle').textContent).toBe('OFF');
  });
  it('cambia a ON luego de 1 clic', () => {
    fixture.nativeElement.querySelector('#btn-toggle').click();
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('#btn-toggle').textContent).toBe('ON');
  });
  it('vuelve a OFF después de 2 clics', () => {
    const btn = fixture.nativeElement.querySelector('#btn-toggle');
    btn.click(); btn.click();
    fixture.detectChanges();
    expect(btn.textContent).toBe('OFF');
  });
  it('realiza múltiples toggles', () => {
    const btn = fixture.nativeElement.querySelector('#btn-toggle');
    for (let i=0; i<5; i++) btn.click();
    fixture.detectChanges();
    expect(btn.textContent).toBe('ON'); // impar
  });
  it('no cambia sin clics', () => {
    expect(fixture.componentInstance.estado).toBe('OFF');
  });
});
