import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IniciosesionPage } from './iniciosesion.page';

describe('IniciosesionPage', () => {
  let component: IniciosesionPage;
  let fixture: ComponentFixture<IniciosesionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IniciosesionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IniciosesionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
