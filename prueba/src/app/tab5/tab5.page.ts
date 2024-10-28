import { Component } from '@angular/core';
import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';

@Component({
  selector: 'app-tab5',
  templateUrl: 'tab5.page.html',
  styleUrls: ['tab5.page.scss']
})
export class Tab5Page {

  nota: string = '';
  archivoNota: string = 'notas.txt';
  notasGuardadas: string[] = [];

  constructor() {}

  async guardarNota() {
    if (this.nota.trim() !== '') {
      try {
        await Filesystem.writeFile({
          path: this.archivoNota,
          data: this.nota,
          directory: Directory.Documents,
          encoding: Encoding.UTF8,
        });

        this.nota = '';
        alert('Nota guardada correctamente');
        
      } catch (error) {
        console.error('Error al guardar la nota', error);
        alert('Error al guardar la nota');
        
      }
      
    }
  }

  async cargarNotas() {
    try {
      const result = await Filesystem.readFile({
        path: this.archivoNota,
        directory: Directory.Documents,
        encoding: Encoding.UTF8,
      });
      if (typeof result.data === 'string') {
        this.notasGuardadas = [result.data]; // Almacena la nota en un array
      } else if (result.data instanceof Blob) {
        const text = await this.blobToString(result.data);
        this.notasGuardadas = [text]; // Almacena la nota en un array
      }
    } catch (error) {
      console.error('Error al cargar las notas', error);
      alert('Error al cargar las notas');
    }
  }

  private async blobToString(blob: Blob): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        resolve(reader.result as string);
      };
      reader.onerror = reject;
      reader.readAsText(blob);
    });

  }

 
  

 
  

}
