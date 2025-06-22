import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardComponent } from './card';

describe('AdvancedCardComponent', () => {
  let fixture: ComponentFixture<CardComponent>;
  let component: CardComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [CardComponent] });
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
  });

  it('debe renderizar el título por defecto', () => {
    fixture.detectChanges(); // importante actualizar el DOM
    const titulo = fixture.nativeElement.querySelector('h2').textContent.trim();
    expect(titulo).toBe('Título por defecto');
  });

  it('debe renderizar la imagen si se proporciona imagenUrl', () => {
    component.imagenUrl = 'https://via.placeholder.com/150';
    fixture.detectChanges(); // actualizar después de asignar el input
    const img = fixture.nativeElement.querySelector('.card-image');
    expect(img).toBeTruthy();
    expect(img.src).toContain('https://via.placeholder.com/150');
  });

  it('debe mostrar el botón si se proporciona botonTexto', () => {
    component.botonTexto = 'Haz clic';
    fixture.detectChanges();
    const boton = fixture.nativeElement.querySelector('button');
    expect(boton).toBeTruthy();
    expect(boton.textContent.trim()).toBe('Haz clic');
  });

  it('debe emitir el evento al hacer clic en el botón', () => {
    component.botonTexto = 'Clic';
    fixture.detectChanges();
    spyOn(component.botonClick, 'emit');
    const boton = fixture.nativeElement.querySelector('button');
    boton.click();
    expect(component.botonClick.emit).toHaveBeenCalled();
  });

  it('debe actualizar dinámicamente los datos del card', () => {
    component.titulo = 'Nuevo título';
    component.descripcion = 'Nueva descripción';
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('h2').textContent.trim()).toBe('Nuevo título');
    expect(fixture.nativeElement.querySelector('p').textContent.trim()).toBe('Nueva descripción');
  });
});
