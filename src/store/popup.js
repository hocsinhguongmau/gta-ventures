import create from 'zustand';

const usePopupStore = create((set) => ({
  open: false,
  setOpen: (state) => set(() => ({ open: state })),
  content: '',
  setContent: (state) => set(() => ({ content: state })),
}));

export default usePopupStore;
