import { Component } from "@angular/core";
import { ModalController } from "@ionic/angular";



@Component({
    selector: "app-about-me-modal",
    template: `
        <ion-header>
            <ion-toolbar>
                <ion-title>Sobre Mí</ion-title>
                <ion-buttons slot="end">
                    <ion-button (click)="dismissModal()">Cerrar</ion-button>
                </ion-buttons>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <ion-card>
            <ion-card-content>
            <p>Para más información puede contactarse .</p>
            </ion-card-content>
            
            </ion-card>
            
            <ion-list>
                <ion-item>
                    <ion-label>
                        <h2>Teléfono</h2>
                        <p>+593 98 425 3830</p>
                    </ion-label>
                </ion-item>
                <ion-item>
                    <ion-label>
                        <h2>Email</h2>
                        <p>samcuti.03&#64;gmail.com</p>
                    </ion-label>
                </ion-item>
                <ion-item>
                    <ion-label>
                        <h2>Redes Sociales</h2>
                        
                        <p>
  <a href="https://www.linkedin.com/in/samuel-cuti-4654a1301/" target="_blank">
    <ion-icon name="logo-linkedin" style="font-size: 30px;"></ion-icon> <!-- Ajusta el tamaño aquí -->
  </a>
  <a href="https://github.com/SamScripts-DEV" target="_blank">
    <ion-icon name="logo-github" style="font-size: 30px;"></ion-icon> <!-- Ajusta el tamaño aquí -->
  </a>
  <a href="https://www.instagram.com/cutisamuel/" target="_blank">
    <ion-icon name="logo-instagram" style="font-size: 30px;"></ion-icon> <!-- Ajusta el tamaño aquí -->
  </a>
</p>

                    </ion-label>
                </ion-item>
            </ion-list>
        </ion-content>
    `
})
export class AboutMeModalComponent {
    constructor(private modalController: ModalController) {}

    dismissModal() {
        this.modalController.dismiss();
    }
}