import { create } from "zustand";

type State = {
  isTransactionCreateModalOpen: boolean;
  isAccountCreateModalOpen: boolean;
};

type Action = {
  setIsTransactionCreateModalOpen: (isOpen: boolean) => void;
  setIsAccountCreateModalOpen: (isOpen: boolean) => void;
};

const useModalsStore = create<State & Action>((set) => ({
  isTransactionCreateModalOpen: false,
  isAccountCreateModalOpen: false,

  setIsTransactionCreateModalOpen: (isOpen: boolean) => {
    set(() => ({
      isTransactionCreateModalOpen: isOpen,
    }));
  },
  setIsAccountCreateModalOpen: (isOpen: boolean) => {
    set(() => ({
      isAccountCreateModalOpen: isOpen,
    }));
  },
}));

export default useModalsStore;
