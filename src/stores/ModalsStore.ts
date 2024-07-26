import { create } from "zustand";

type State = {
  isTransactionCreateModalOpen: boolean;
};

type Action = {
  setIsTransactionCreateModalOpen: (isOpen: boolean) => void;
};

const useModalsStore = create<State & Action>((set) => ({
  isTransactionCreateModalOpen: false,

  setIsTransactionCreateModalOpen: (isOpen: boolean) => {
    set(() => ({
      isTransactionCreateModalOpen: isOpen,
    }));
  },
}));

export default useModalsStore;
