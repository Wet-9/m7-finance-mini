import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ElectricBillPage } from './electric-bill.page';

describe('ElectricBillPage', () => {
  let component: ElectricBillPage;
  let fixture: ComponentFixture<ElectricBillPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ElectricBillPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
