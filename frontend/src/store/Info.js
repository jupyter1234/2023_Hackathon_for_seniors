import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const UserInfo = atom({
  key: 'UserInfo',
  default: {},
  effects_UNSTABLE: [persistAtom],
});

export const IsLogin = atom({
  key: 'IsLogin',
  default: false,
  effects_UNSTABLE: [persistAtom],
});

export const ProgramLocation = atom({
  key: 'ProgramLocation',
  default: '',
  effects_UNSTABLE: [persistAtom],
});

export const ProgramInfo = atom({
  key: 'ProgramInfo',
  default: {},
  effects_UNSTABLE: [persistAtom],
});
