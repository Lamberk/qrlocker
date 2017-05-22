import {
  Component,
  OnInit
} from '@angular/core';
import {QrService} from './qr.service';

@Component({
  selector: 'qr',
  templateUrl: './qr.component.html'
})
export class QrComponent implements OnInit {
  public qrCode;
  constructor(
    public qrService: QrService,
  ) {}

  public ngOnInit() {
    this.getQr();
  }

  private getQr() {
    this.qrService.getQr()
      .subscribe((qrCode) => {
        this.qrCode = qrCode.json().img;
      });
  }
}
