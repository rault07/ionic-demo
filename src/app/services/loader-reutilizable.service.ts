import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoaderComponent } from '../components/loader/loader.component';

@Injectable({
  providedIn: 'root'
})
export class LoaderReutilizableService {

  private jsonUrl = 'assets/imgJson.json';

  constructor(
    private modalCtrl: ModalController,
    private http: HttpClient
    ) { }

    async mostrarModal() {

      const modal = await this.modalCtrl.create({
        component: LoaderComponent
      });
      await modal.present();
    }

    getImagesData(): Observable<any[]> {
      return this.http.get<any[]>(this.jsonUrl);
    }

}
