import { host } from ".";

export const registration = async (email, password) => {
  const response = await host.post("api/auth/registration/", { email, password, role: "ADMIN" });
  return response;
};
export const login = async (email, password) => {
  const response = await host.post("api/auth/login/", { email, password });
  return response;
};
export const registration = async () => {
  const response = await host.post("api/auth/check/", { email, password, role: "ADMIN" });
  return response;
};
