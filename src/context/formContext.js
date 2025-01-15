import { create } from "zustand";

export const useFormStore = create((set) => ({
  data: {
    name: "",
    age: "",
    email: "",
    phone: "",
    location: "",
  },
  setData: (data) => set({ data }),
}));
