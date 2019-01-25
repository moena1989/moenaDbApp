import {Component, OnInit} from '@angular/core';

import {Router} from '@angular/router';
import {DbService} from '../../_services/db.service';
import {ToolsService} from '../../_services/tools.service';
import {CurrentStorageService} from '../../_services/current-storage.service';


@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {
  err_msg = '';
  reloj_encontrado: any = {};
  mostrar_busqueda = false;
  serial_bs = 'GH-ZQ9U4';

  /*
  En teoría, siempre se llegará a esta página cuando ya se halla encontrado un reloj, y deba proyectarse, el objeto buscado está en db
  TODO buscar una manera más opptima sin tener que guardarlo y traerlo de db.
   */
  constructor(public db: DbService, private tool: ToolsService, public currentStorage: CurrentStorageService, private router: Router) {
  }

  buscarBySerial(serial_ingresado: any) {
    // console.log(serial_ingresado);

    if (serial_ingresado !== '') {
      this.db.buscarReloj(serial_ingresado).subscribe(result => {
        if (!result) {
          console.log('ese reloj no existe');
          this.err_msg = 'Ese tal reloj no existe';

        } else {
          console.log('reloj encontrado ;)');
          // console.log(result);
          this.reloj_encontrado = result;
          this.mostrar_busqueda = true;
        }
      });
    } else {
      console.log('no se escribió ningun serial');
      this.err_msg = 'No se ha escrito ningun serial';
    }
  }

  ngOnInit() {
  }

  cerrar() {
    this.serial_bs = '';
    this.mostrar_busqueda = false;
    this.currentStorage.relojDisponible = null;
  }
}
