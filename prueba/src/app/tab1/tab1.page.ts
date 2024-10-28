import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AboutMeModalComponent } from './modal-component';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  
  
})
export class Tab1Page {

  isDarkMode: boolean = false;

  constructor(private modalController: ModalController) {}

  toggleDarkMode(event: any) {
    this.isDarkMode = event.detail.checked
    document.body.classList.toggle('dark', this.isDarkMode);
  }

  async openModal() {
    const modal = await this.modalController.create({
      component: AboutMeModalComponent
    });
    return await modal.present();
  }

}
