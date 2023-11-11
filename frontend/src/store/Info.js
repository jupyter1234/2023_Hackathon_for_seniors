import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

export const ProgramLocation = atom({
  key: 'ProgramLocation',
  default: '',
  effects_UNSTABLE: [recoilPersist()],
});

export const ProgramInfo = atom({
  key: 'ProgramInfo',
  default: {},
  effects_UNSTABLE: [recoilPersist()],
});
