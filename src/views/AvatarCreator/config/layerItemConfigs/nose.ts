import { avaiableColors } from '../avaiable-colors';
import { GenderType, LAYER_ID } from './../../interface/avatar.interface';
import { LayerItemConfig } from './../../interface/layer.interface';
const noseConfig: LayerItemConfig[] = [
  // {
  //   filename: 'Curve',
  //   genderType: GenderType.UNSET,
  //   weight: 10,
  // },

  // {
  //   filename: 'Flat',
  //   genderType: GenderType.UNSET,
  //   weight: 10,
  // },

  // {
  //   filename: 'Pointed',
  //   genderType: GenderType.UNSET,
  //   weight: 10,
  // },

  // {
  //   filename: 'Round',
  //   genderType: GenderType.UNSET,
  //   weight: 10,
  // },

  // {
  //   filename: 'tilt',
  //   genderType: GenderType.UNSET,
  //   weight: 10,
  // },
  {
    filename: '头像初稿_朝天鼻',
    genderType: GenderType.UNSET,
    avaiableColorGroups: avaiableColors[LAYER_ID.NOSE],
    weight: 10,
  },
  {
    filename: '头像初稿_普通鼻',
    genderType: GenderType.UNSET,
    avaiableColorGroups: avaiableColors[LAYER_ID.NOSE],
    weight: 10,
  },
  {
    filename: '头像初稿_鹰钩鼻',
    genderType: GenderType.UNSET,
    avaiableColorGroups: avaiableColors[LAYER_ID.NOSE],
    weight: 10,
  },
  {
    filename: '头像初稿_圆鼻',
    genderType: GenderType.UNSET,
    avaiableColorGroups: avaiableColors[LAYER_ID.NOSE],
    weight: 10,
  },
];

export default noseConfig;
