import { avaiableColors } from './../avaiable-colors';
import { GenderType, LAYER_ID } from './../../interface/avatar.interface';
import { LayerItemConfig } from './../../interface/layer.interface';
const backgroundConfig: LayerItemConfig[] = [
  // {
  //   filename: 'clean',
  //   genderType: GenderType.UNSET,
  //   avaiableColorGroups: avaiableColors[LAYER_ID.BACKGROUND],
  //   weight: 10,
  // },
  {
    filename: '头像初稿_背景-66',
    genderType: GenderType.UNSET,
    avaiableColorGroups: avaiableColors[LAYER_ID.BACKGROUND],
    weight: 10,
  },
  {
    filename: '头像初稿_背景-67',
    genderType: GenderType.UNSET,
    avaiableColorGroups: avaiableColors[LAYER_ID.BACKGROUND],
    weight: 10,
  },
  {
    filename: '头像初稿_背景黑客帝国',
    genderType: GenderType.UNSET,
    avaiableColorGroups: avaiableColors[LAYER_ID.BACKGROUND],
    weight: 2,
  },
  {
    filename: '头像初稿_纯色背景',
    genderType: GenderType.UNSET,
    colorNotSameAs: [LAYER_ID.BANGS],
    avaiableColorGroups: avaiableColors[LAYER_ID.BACKGROUND],
    weight: 120,
  },
  {
    filename: '头像初稿_图案背景',
    genderType: GenderType.UNSET,
    avaiableColorGroups: avaiableColors[LAYER_ID.BACKGROUND],
    weight: 10,
  },
  {
    filename: '头像初稿_图案背景1',
    genderType: GenderType.UNSET,
    avaiableColorGroups: avaiableColors[LAYER_ID.BACKGROUND],
    weight: 10,
  },
  {
    filename: '头像初稿_图案背景2',
    genderType: GenderType.UNSET,
    avaiableColorGroups: avaiableColors[LAYER_ID.BACKGROUND],
    weight: 10,
  },
  {
    filename: '头像初稿_图案背景4',
    genderType: GenderType.UNSET,
    avaiableColorGroups: avaiableColors[LAYER_ID.BACKGROUND],
    weight: 10,
  },
  {
    filename: '头像初稿_图案背景5',
    genderType: GenderType.UNSET,
    avaiableColorGroups: avaiableColors[LAYER_ID.BACKGROUND],
    weight: 10,
  },
  {
    filename: '头像初稿_图案背景6',
    genderType: GenderType.UNSET,
    avaiableColorGroups: avaiableColors[LAYER_ID.BACKGROUND],
    weight: 10,
  },
];

export default backgroundConfig;
