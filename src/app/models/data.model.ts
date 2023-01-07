export interface IdEquipoOrigen {
  id_equipo: number;
  nombre: string;
  localidad: string;
  categoria: string;
}

export interface IdPuertoOrigen {
  id_puerto: number;
  nombre: string;
  ultima_actualizacion: Date;
}

export interface IdEquipoDestino {
  id_equipo: number;
  nombre: string;
  localidad: string;
  categoria: string;
}

export interface IdPuertoDestino {
  id_puerto: number;
  nombre: string;
  ultima_actualizacion: Date;
}

export interface Interface {
  id_interface: number;
  id_EquipoOrigen: IdEquipoOrigen;
  id_PuertoOrigen: IdPuertoOrigen;
  estatus: boolean;
  etiqueta_prtg?: any;
  grupo: number;
  if_index: number;
  bw: number;
  bw_al: number;
  id_prtg: number;
  ospf: boolean;
  description: string;
  id_EquipoDestino: IdEquipoDestino;
  id_PuertoDestino: IdPuertoDestino;
  ultima_actualizacion: Date;
}