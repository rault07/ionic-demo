import { Component } from '@angular/core';
import { LoaderReutilizableService } from 'src/app/services/loader-reutilizable.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(
    private loaderReutilizable: LoaderReutilizableService
  ) {}


  btnModal() {
    this.loaderReutilizable.mostrarModal();
  }

  btnModalCloset() {
    this.loaderReutilizable.cerrarModal();
  }

}
