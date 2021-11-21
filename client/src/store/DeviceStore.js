import { makeAutoObservable } from "mobx";

export default class DeviceStore {
  constructor() {
    this._types = [];
    this._brands = [
      { id: 1, name: "Apple" },
      { id: 2, name: "LG" },
      { id: 3, name: "Samsung" },
      { id: 4, name: "Asus" },
    ];
    this._devices = [
      {
        id: 1,
        name: "Dev1",
        img: "https://www.spark.co.nz/content/dam/tnz/mobile/phones/Apple/iphone-13/iphone-13-pro/iph-13-pro-sierra-blue-2.png",
        price: 50000,
        rating: 5,
      },
      {
        id: 2,
        name: "Dev2",
        img: "https://www.spark.co.nz/content/dam/tnz/mobile/phones/Apple/iphone-13/iphone-13-pro/iph-13-pro-sierra-blue-2.png",
        price: 20000,
        rating: 4.5,
      },
      {
        id: 3,
        name: "Dev3",
        img: "https://www.spark.co.nz/content/dam/tnz/mobile/phones/Apple/iphone-13/iphone-13-pro/iph-13-pro-sierra-blue-2.png",
        price: 40000,
        rating: 3.5,
      },
      {
        id: 4,
        name: "Dev4",
        img: "https://www.spark.co.nz/content/dam/tnz/mobile/phones/Apple/iphone-13/iphone-13-pro/iph-13-pro-sierra-blue-2.png",
        price: 34000,
        rating: 5,
      },
      {
        id: 5,
        name: "Dev5",
        img: "https://www.spark.co.nz/content/dam/tnz/mobile/phones/Apple/iphone-13/iphone-13-pro/iph-13-pro-sierra-blue-2.png",
        price: 50000,
        rating: 2.5,
      },
      {
        id: 6,
        name: "Dev6",
        img: "https://www.spark.co.nz/content/dam/tnz/mobile/phones/Apple/iphone-13/iphone-13-pro/iph-13-pro-sierra-blue-2.png",
        price: 55000,
        rating: 5,
      },
      {
        id: 7,
        name: "Dev7",
        img: "https://www.spark.co.nz/content/dam/tnz/mobile/phones/Apple/iphone-13/iphone-13-pro/iph-13-pro-sierra-blue-2.png",
        price: 50000,
        rating: 5,
      },
      {
        id: 8,
        name: "Dev8",
        img: "https://www.spark.co.nz/content/dam/tnz/mobile/phones/Apple/iphone-13/iphone-13-pro/iph-13-pro-sierra-blue-2.png",
        price: 10000,
        rating: 1.5,
      },
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
