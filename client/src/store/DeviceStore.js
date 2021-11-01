import { makeAutoObservable } from "mobx";

export default class DeviceStore {
  constructor() {
    this._types = [
      { id: 1, name: "Fridge" },
      { id: 2, name: "TV" },
      { id: 3, name: "Notebook" },
      { id: 4, name: "Phone" },
    ];
    this._brands = [
      { id: 1, name: "Apple" },
      { id: 2, name: "LG" },
      { id: 3, name: "Samsung" },
      { id: 4, name: "Asus" },
    ];
    this._devices = [
      { id: 1, name: "Dev1" },
      { id: 2, name: "Dev2" },
      { id: 3, name: "Dev3" },
    ];
    this._selectedType = {};
    this._selectedBrand = {};
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
  setSelectedType(type) {
    this._selectedType = type;
  }
  setSelectedBrand(brand) {
    this._selectedBrand = brand;
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
  get selectedType() {
    return this._selectedType;
  }
  get selectedBrand() {
    return this._selectedBrand;
  }
}
