import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoaderReutilizableService } from 'src/app/services/loader-reutilizable.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(
    private loaderReutilizable: LoaderReutilizableService,
    private router: Router
  ) {}
  
  btnAbrirTab1() {
    this.loaderReutilizable.mostrarModal();
    setTimeout(() => {
      this.loaderReutilizable.cerrarModal();
      this.router.navigate(['/tabs/tab1']);
    }, 5000);
  }

  btnAbrirTab3() {
    this.loaderReutilizable.mostrarModal();
    setTimeout(() => {
      this.loaderReutilizable.cerrarModal();
      this.router.navigate(['/tabs/tab3']);
    }, 10000);
  }

}
