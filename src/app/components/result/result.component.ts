import { Component, Input, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { Results } from 'src/app/interfaces';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
})
export class ResultComponent  implements OnInit {

  @Input() result!: Results;
  @Input() index!: number;

  constructor(
    private actionSheetCtrl: ActionSheetController,
    private storageService: StorageService,

  ) { }

  ngOnInit() {}

  async presentActionSheet() {

    const resultOrFavorite = this.storageService.resultOrFAvorites(this.result);

    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Opciones',
      buttons: [
        {
          text: resultOrFavorite ? 'Retirar de favorito' : 'Agregar a favoritos',
          icon: resultOrFavorite ? 'heart' : 'heart-outline',
          handler: () => this.onTaggFavorite()
        },
        {
          text: 'Cancel',
          icon: 'close-outline',
          role: 'cancel',
        }
      ],
    });

    await actionSheet.present();
  }

  onTaggFavorite() {

    this.storageService.saveRemoveResult(this.result);
    console.log('toogle favoritos')
  }

}
