import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoaderComponent } from '../components/loader/loader.component';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoaderReutilizableService {

  private jsonUrl = 'assets/imgJson.json';

  constructor(
    private modalCtrl: ModalController,
    private http: HttpClient,
    private router: Router
  ) {  }

  async mostrarModal() {
    const modal = await this.modalCtrl.create({
      component: LoaderComponent
    });
    await modal.present();
  }

  async cerrarModal() {
    const modal = await this.modalCtrl.getTop(); // Obtener la instancia del modal actual
    if (modal) {
      await modal.dismiss(); // Cerrar el modal
    }
  }

  getImagesData(): Observable<any[]> {
    return this.http.get<any[]>(this.jsonUrl);
  }


  
  

}
