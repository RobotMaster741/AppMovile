import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RepartidorCreatePage } from './repartidor-create.page';

describe('RepartidorCreatePage', () => {
  let component: RepartidorCreatePage;
  let fixture: ComponentFixture<RepartidorCreatePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RepartidorCreatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
