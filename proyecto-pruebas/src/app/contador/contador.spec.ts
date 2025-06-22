import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContadorComponent } from './contador';

describe('ContadorComponent', () => {
  let fixture: ComponentFixture<ContadorComponent>;
  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [ContadorComponent] });
    fixture = TestBed.createComponent(ContadorComponent);
    fixture.detectChanges();
  });

  it('inicia en 0', () => {
    expect(fixture.nativeElement.querySelector('h1').textContent).toContain('0');
  });
  it('aumenta a 1 con +1', () => {
    fixture.nativeElement.querySelector('#btn-inc').click();
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('h1').textContent).toContain('1');
  });
  it('disminuye a -1 con -1', () => {
    fixture.nativeElement.querySelector('#btn-dec').click();
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('h1').textContent).toContain('-1');
  });
  it('resetea a 0', () => {
    fixture.componentInstance.contador = 5;
    fixture.nativeElement.querySelector('#btn-reset').click();
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('h1').textContent).toContain('0');
  });
  it('comporta todos los botones', () => {
    const inc = fixture.nativeElement.querySelector('#btn-inc');
    const dec = fixture.nativeElement.querySelector('#btn-dec');
    inc.click(); inc.click();
    dec.click(); fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('h1').textContent).toContain('1');
  });
});
