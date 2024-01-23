import { ChangeDetectorRef, Component } from '@angular/core'
import { MapContextLayerModel } from '../map-context/map-context.model'
import { MapFacade } from '../+state/map.facade'

const INVALID_FILE_FORMAT_ERROR_MESSAGE = 'Invalid file format'

@Component({
  selector: 'gn-ui-add-layer-from-file',
  templateUrl: './add-layer-from-file.component.html',
  styleUrls: ['./add-layer-from-file.component.css'],
})


export class AddLayerFromFileComponent {
  errorMessage: string | null = null
  successMessage: string | null = null
  loading = false
  readonly acceptedMimeType = ['.geojson']
  readonly maxFileSize = 5000000

  constructor(
    private mapFacade: MapFacade,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  async handleFileChange(file: File) {
    if (!file) {
      this.displayMessage(INVALID_FILE_FORMAT_ERROR_MESSAGE, 'error');
      return
    }
    if (file.size > this.maxFileSize) {
      this.displayMessage('File size exceeds the limit of 5MB', 'error');
      return
    }
    await this.addLayer(file)
  }

  private async addLayer(file: File) {
    this.errorMessage = null
    this.loading = true
    try {
      if (!this.isFileFormatValid(file)) {
        this.displayMessage(INVALID_FILE_FORMAT_ERROR_MESSAGE, 'error');
        return
      }

      const fileExtension = this.getFileExtension(file)
      switch (fileExtension) {
        case 'geojson':
          await this.addGeoJsonLayer(file)
          break
        default:
          this.displayMessage(INVALID_FILE_FORMAT_ERROR_MESSAGE, 'error');
          break
      }
    } catch (error) {
      const err = error as Error
      this.displayMessage('Error loading file: ' + err.message, 'error');
    } finally {
      this.loading = false
    }
  }

  private addGeoJsonLayer(file: File) {
    return new Promise<void>((resolve, reject) => {
      try {
        const reader = new FileReader()
        reader.onload = () => {
          const result = reader.result as string
          const title = file.name.split('.').slice(0, -1).join('.')
          const layerToAdd: MapContextLayerModel = {
            type: 'geojson',
            data: result,
          }
          this.mapFacade.addLayer({ ...layerToAdd, title: title })
          this.displayMessage('File successfully added to map', 'success');
          resolve()
        }
        reader.onerror = reject
        reader.readAsText(file)
      } catch (error) {
        reject(error)
      }
    })
  }

  private isFileFormatValid(file: File): boolean {
    const fileExtension = this.getFileExtension(file)
    return this.acceptedMimeType.includes(`.${fileExtension}`)
  }

  private getFileExtension(file: File): string | undefined {
    return file.name.split('.').pop();
  }

  private displayMessage(message: string, type: 'success' | 'error') {
    if (type === 'success') {
      this.successMessage = message;
    } else if (type === 'error') {
      this.errorMessage = message;
    }

    setTimeout(() => {
      if (type === 'success') {
        this.successMessage = null;
      } else if (type === 'error') {
        this.errorMessage = null;
      }
      this.changeDetectorRef.detectChanges();
    }, 5000);
  }
}
