import { makeAutoObservable } from "mobx";

export default class UserStore {
  constructor() {
    this._isAuthorized = false;
    this._user = {};
    makeAutoObservable(this);
  }
  setIsAuthorize(flag) {
    this._isAuthorized = flag;
  }
  setUser(user) {
    this._user = user;
  }
  get isAuthorized() {
    return this._isAuthorized;
  }
  get user() {
    return this._user;
  }
}
