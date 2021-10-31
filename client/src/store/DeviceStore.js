import { makeAutoObservable } from "mobx";

export default class DeviceStore {
  constructor() {
    this._types = [
      { id: 1, name: "Fridge" },
      { id: 2, name: "TV" },
    ];
    this._brands = [
      { id: 1, name: "Apple" },
      { id: 2, name: "LG" },
    ];
    this._devices = [
      { id: 1, name: "Dev1" },
      { id: 2, name: "Dev2" },
      { id: 3, name: "Dev3" },
    ];
    makeAutoObservable(this);
  }
  setTypes(types) {
    this._types = types;
  }
  setBrands(brands) {
    this._brands = brands;
  }
  setDevices(devices) {
    this._devices = devices;
  }
  get types() {
    return this._types;
  }
  get brands() {
    return this._brands;
  }
  get devices() {
    return this._devices;
  }
}
