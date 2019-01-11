export class ClockModel {
  base: Base[];
  caracteristicas: Caracteristica[];
  metadata: Metadata;
}

export class Caracteristica {
  private id_caracteristica: string;
  private id_opcion: string;
  private nombre_caracteristica: string;
  private nombre_opcion: string;

  constructor(_id_caracteristica: string, _id_opcion: string, _nombre_caracteristica: string, _nombre_opcion: string) {
    this.id_caracteristica = _id_caracteristica;
    this.id_opcion = _id_opcion;
    this.nombre_caracteristica = _nombre_caracteristica;
    this.nombre_opcion = _nombre_opcion;
  }
}

export class Base {
  private id_base: string;
  private id_seleccion: string;
  private nombre_base: string;
  private nombre_seleccion: string;

  constructor(_nombre_base: string, _nombre_seleccion: string, _id_base: string, _id_seleccion: string) {
    this.id_base = _id_base;
    this.id_seleccion = _id_seleccion;
    this.nombre_base = _nombre_base;
    this.nombre_seleccion = _nombre_seleccion;
  }
}

export class Metadata {
  fecha: string;
  serial_def: string;
  serial_raw: string;
  img_url: string;


  constructor(fecha: string,
              serial_def: string,
              serial_raw: string) {

    this.fecha = fecha;
    this.serial_def = serial_def;
    this.serial_raw = serial_raw;
  }
}
