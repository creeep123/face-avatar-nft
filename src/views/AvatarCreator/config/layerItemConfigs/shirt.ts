import { avaiableColors } from './../avaiable-colors';
import { GenderType, LAYER_ID } from './../../interface/avatar.interface';
import { LayerItemConfig } from './../../interface/layer.interface';
const shirtConfig: LayerItemConfig[] = [
  // {
  //   filename: 'Collared',
  //   genderType: GenderType.UNSET,
  //   avaiableColorGroups: avaiableColors[LAYER_ID.SHIRT],
  //   colorNotSameAs: [LAYER_ID.BACKGROUND],
  //   weight: 10,
  // },

  // {
  //   filename: 'Crew',
  //   genderType: GenderType.UNSET,
  //   avaiableColorGroups: avaiableColors[LAYER_ID.SHIRT],
  //   colorNotSameAs: [LAYER_ID.BACKGROUND],
  //   weight: 10,
  // },

  // {
  //   filename: 'Open',
  //   genderType: GenderType.UNSET,
  //   avaiableColorGroups: avaiableColors[LAYER_ID.SHIRT],
  //   colorNotSameAs: [LAYER_ID.BACKGROUND],
  //   weight: 10,
  // },
  {
    filename: '头像初稿_女_衣领-17',
    genderType: GenderType.FEMALE,
    avaiableColorGroups: avaiableColors[LAYER_ID.SHIRT],
    colorNotSameAs: [LAYER_ID.BACKGROUND],
    weight: 2,
  },
  {
    filename: '头像初稿_女_衣领-80',
    genderType: GenderType.FEMALE,
    avaiableColorGroups: avaiableColors[LAYER_ID.SHIRT],
    colorNotSameAs: [LAYER_ID.BACKGROUND],
    weight: 10,
  },
  {
    filename: '头像初稿_女_衣领-81',
    genderType: GenderType.FEMALE,
    avaiableColorGroups: avaiableColors[LAYER_ID.SHIRT],
    colorNotSameAs: [LAYER_ID.BACKGROUND],
    weight: 10,
  },
  {
    filename: '头像初稿_衣领-60',
    genderType: GenderType.UNSET,
    avaiableColorGroups: avaiableColors[LAYER_ID.SHIRT],
    colorNotSameAs: [LAYER_ID.BACKGROUND],
    weight: 10,
  },
  {
    filename: '头像初稿_衣领-61',
    genderType: GenderType.UNSET,
    avaiableColorGroups: avaiableColors[LAYER_ID.SHIRT],
    colorNotSameAs: [LAYER_ID.BACKGROUND],
    weight: 10,
  },
  {
    filename: '头像初稿_男女-衣领-78',
    genderType: GenderType.UNSET,
    avaiableColorGroups: avaiableColors[LAYER_ID.SHIRT],
    colorNotSameAs: [LAYER_ID.BACKGROUND],
    weight: 10,
  },
  {
    filename: '头像初稿_男女-衣领-79',
    genderType: GenderType.UNSET,
    avaiableColorGroups: avaiableColors[LAYER_ID.SHIRT],
    colorNotSameAs: [LAYER_ID.BACKGROUND],
    weight: 10,
  },
];

export default shirtConfig;
