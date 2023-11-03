import { create } from 'zustand'
import { UseStoreProps } from '@types'

const useStatusStore = create<UseStoreProps>()((set) => ({
  status: {
    isDefault: false,
    isHovered: false,
    skillId: '',
  },
  setStatus: (skillId: string) => {
    set((state) => {
      return {
        ...state,
        status: {
          isDefault: false,
          isHovered: true,
          skillId,
        },
      }
    })
  },
  clearStatus: () => {
    set((state) => {
      return {
        ...state,
        status: {
          isDefault: true,
          isHovered: false,
          skillId: '',
        },
      }
    })
  },
}))

export default useStatusStore
