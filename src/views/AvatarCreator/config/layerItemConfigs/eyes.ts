import { GenderType, LAYER_ID } from './../../interface/avatar.interface';
import { LayerItemConfig } from '../../interface/layer.interface';
import { avaiableColors } from '../avaiable-colors';
const eyesConfig: LayerItemConfig[] = [
  // {
  //   genderType: GenderType.UNSET,
  //   filename: 'Eyes',
  //   weight: 10,
  // },
  // {
  //   genderType: GenderType.UNSET,
  //   filename: 'Round',
  //   weight: 10,
  // },
  // {
  //   genderType: GenderType.UNSET,
  //   filename: 'Smiling',
  //   weight: 10,
  // },
  // {
  //   genderType: GenderType.UNSET,
  //   filename: 'stare',
  //   weight: 10,
  // },
  {
    genderType: GenderType.MALE,
    filename: '头像初稿_男-闭眼',
    avaiableColorGroups: avaiableColors[LAYER_ID.EYES],
    weight: 1,
    removeLayers: [LAYER_ID.EYELID],
  },
  {
    genderType: GenderType.MALE,
    filename: '头像初稿_男-大眼睛-睁',
    avaiableColorGroups: avaiableColors[LAYER_ID.EYES],
    weight: 10,
  },
  {
    genderType: GenderType.MALE,
    filename: '头像初稿_男-小眼睛-睁',
    avaiableColorGroups: avaiableColors[LAYER_ID.EYES],
    weight: 10,
  },
  {
    genderType: GenderType.FEMALE,
    filename: '头像初稿_女-闭眼',
    avaiableColorGroups: avaiableColors[LAYER_ID.EYES],
    weight: 1,
    removeLayers: [LAYER_ID.EYELID],
  },
  {
    genderType: GenderType.FEMALE,
    filename: '头像初稿_女-大眼睛-睁',
    avaiableColorGroups: avaiableColors[LAYER_ID.EYES],
    weight: 10,
  },
  {
    genderType: GenderType.FEMALE,
    filename: '头像初稿_女-小眼睛-睁',
    avaiableColorGroups: avaiableColors[LAYER_ID.EYES],
    weight: 10,
  },
];
export default eyesConfig;
