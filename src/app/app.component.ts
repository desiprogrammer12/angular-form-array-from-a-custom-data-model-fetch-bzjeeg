import { Component } from '@angular/core';
import { FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { Interface } from './models/data.model';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  interfacesForm: FormGroup;

  constructor(private http: HttpClient, private fb: FormBuilder) {}

  ngOnInit() {
    this.http
      .get('https://jsonblob.com/api/b0ef0625-b216-11e9-9243-d95533e0ccee')
      .subscribe((data: Interface[]) => {
        this.interfacesForm = this.fb.group({
          interfaces: this.fb.array(
            data.map((datum) => this.generateInterfaceForm(datum))
          ),
        });
      });
  }

  addNewInterface() {}

  removeInterfaceAtIndex(index: number) {
    (<FormArray>this.interfacesForm.get('interfaces')).removeAt(index);
  }

  private generateInterfaceForm(interfaceToGenerateFormFor: Interface) {
    return this.fb.group({
      id_interface: [interfaceToGenerateFormFor.id_interface],
      id_EquipoOrigen: this.fb.group({
        id_equipo: [interfaceToGenerateFormFor.id_EquipoOrigen.id_equipo],
        nombre: [interfaceToGenerateFormFor.id_EquipoOrigen.nombre],
        localidad: [interfaceToGenerateFormFor.id_EquipoOrigen.localidad],
        categoria: [interfaceToGenerateFormFor.id_EquipoOrigen.categoria],
      }),
      id_PuertoOrigen: this.fb.group({
        id_puerto: [interfaceToGenerateFormFor.id_PuertoOrigen.id_puerto],
        nombre: [interfaceToGenerateFormFor.id_PuertoOrigen.nombre],
        ultima_actualizacion: [
          interfaceToGenerateFormFor.id_PuertoOrigen.ultima_actualizacion,
        ],
      }),
      estatus: [interfaceToGenerateFormFor.estatus],
      etiqueta_prtg: [interfaceToGenerateFormFor.etiqueta_prtg],
      grupo: [interfaceToGenerateFormFor.grupo],
      if_index: [interfaceToGenerateFormFor.if_index],
      bw: [interfaceToGenerateFormFor.bw],
      bw_al: [interfaceToGenerateFormFor.bw_al],
      id_prtg: [interfaceToGenerateFormFor.id_prtg],
      ospf: [interfaceToGenerateFormFor.ospf],
      description: [interfaceToGenerateFormFor.description],
      id_EquipoDestino: this.fb.group({
        id_equipo: [interfaceToGenerateFormFor.id_EquipoDestino.id_equipo],
        nombre: [interfaceToGenerateFormFor.id_EquipoDestino.nombre],
        localidad: [interfaceToGenerateFormFor.id_EquipoDestino.localidad],
        categoria: [interfaceToGenerateFormFor.id_EquipoDestino.categoria],
      }),
      id_PuertoDestino: this.fb.group({
        id_puerto: [interfaceToGenerateFormFor.id_PuertoDestino.id_puerto],
        nombre: [interfaceToGenerateFormFor.id_PuertoDestino.nombre],
        ultima_actualizacion: [
          interfaceToGenerateFormFor.id_PuertoDestino.ultima_actualizacion,
        ],
      }),
      ultima_actualizacion: [interfaceToGenerateFormFor.ultima_actualizacion],
    });
  }
}
