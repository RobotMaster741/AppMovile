import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PackageCreatePage } from './package-create.page';

describe('PackageCreatePage', () => {
  let component: PackageCreatePage;
  let fixture: ComponentFixture<PackageCreatePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PackageCreatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
