import create from 'zustand';

const usePopupStore = create((set) => ({
  open: false,
  setOpen: (state) => set(() => ({ open: state })),
}));

export default usePopupStore;
