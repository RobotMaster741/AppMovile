import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PackageDetailPage } from './package-detail.page';

describe('PackageDetailPage', () => {
  let component: PackageDetailPage;
  let fixture: ComponentFixture<PackageDetailPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PackageDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
