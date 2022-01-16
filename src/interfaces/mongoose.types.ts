export interface IUser {
  name: string;
  email: string;
  password: string;
}

export interface IManager extends IUser {}

export interface IAdmin extends IUser {}

export interface IDriver extends IUser {}

export interface IVehicle {}

export interface IDeliveryManager {}
