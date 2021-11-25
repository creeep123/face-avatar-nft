import { avaiableColors } from './../avaiable-colors';
import { GenderType, LAYER_ID } from './../../interface/avatar.interface';
import { LayerItemConfig } from './../../interface/layer.interface';
const hairConfig: LayerItemConfig[] = [
  // {
  //   filename: "头像初稿_男发-9",
  //   genderType: GenderType.MALE,
  //   avaiableColorGroups: avaiableColors[LAYER_ID.HAIR],
  //   colorNotSameAs: [LAYER_ID.BACKGROUND],
  //   weight: 10,
  // },

  // {
  //   filename: "头像初稿_男发-11",
  //   genderType: GenderType.MALE,
  //   avaiableColorGroups: avaiableColors[LAYER_ID.HAIR],
  //   colorNotSameAs: [LAYER_ID.BACKGROUND],
  //   weight: 10,
  // },
  // {
  //   filename: "头像初稿_男发-13",
  //   genderType: GenderType.MALE,
  //   avaiableColorGroups: avaiableColors[LAYER_ID.HAIR],
  //   colorNotSameAs: [LAYER_ID.BACKGROUND],
  //   weight: 10,
  // },
  // // {
  // //   filename: "Full",
  // //   genderType: GenderType.FEMAL,
  // //   avaiableColorGroups: avaiableColors[LAYER_ID.HAIR],
  // //   colorNotSameAs: [LAYER_ID.BACKGROUND, LAYER_ID.SHIRT],
  // //   weight: 10,
  // //   removeLayers: [LAYER_ID.FACIAL_HAIR],
  // // },

  // {
  //   filename: "头像初稿_男发-14",
  //   genderType: GenderType.MALE,
  //   avaiableColorGroups: avaiableColors[LAYER_ID.HAIR],
  //   colorNotSameAs: [LAYER_ID.BACKGROUND],
  //   weight: 10,
  // },
  // {
  //   filename: "头像初稿_男发-15",
  //   genderType: GenderType.MALE,
  //   avaiableColorGroups: avaiableColors[LAYER_ID.HAIR],
  //   colorNotSameAs: [LAYER_ID.BACKGROUND],
  //   weight: 10,
  // },
  // {
  //   filename: "头像初稿_男发-20",
  //   genderType: GenderType.MALE,
  //   avaiableColorGroups: avaiableColors[LAYER_ID.HAIR],
  //   colorNotSameAs: [LAYER_ID.BACKGROUND],
  //   weight: 10,
  // },
  {
    filename: '头像初稿_女发-25',
    genderType: GenderType.FEMALE,
    avaiableColorGroups: avaiableColors[LAYER_ID.HAIR],
    colorNotSameAs: [LAYER_ID.BACKGROUND],
    weight: 10,
    removeLayers: [LAYER_ID.FACIAL_HAIR],
  },
  {
    filename: '头像初稿_女发-26',
    genderType: GenderType.FEMALE,
    avaiableColorGroups: avaiableColors[LAYER_ID.HAIR],
    colorNotSameAs: [LAYER_ID.BACKGROUND],
    weight: 10,
    removeLayers: [LAYER_ID.FACIAL_HAIR],
  },
  {
    filename: '头像初稿_女发-27',
    genderType: GenderType.FEMALE,
    avaiableColorGroups: avaiableColors[LAYER_ID.HAIR],
    colorNotSameAs: [LAYER_ID.BACKGROUND],
    weight: 10,
    removeLayers: [LAYER_ID.FACIAL_HAIR],
  },
  {
    filename: '头像初稿_女发-28',
    genderType: GenderType.FEMALE,
    avaiableColorGroups: avaiableColors[LAYER_ID.HAIR],
    colorNotSameAs: [LAYER_ID.BACKGROUND],
    weight: 10,
    removeLayers: [LAYER_ID.FACIAL_HAIR],
  },
  {
    genderType: GenderType.UNSET,
    empty: true,
    weight: 10,
  },
  // {
  //   genderType: GenderType.MALE,
  //   empty: true,
  //   weight: 10,
  // },
  // {
  //   filename: "Turban",
  //   genderType: GenderType.UNSET,
  //   avaiableColorGroups: avaiableColors[LAYER_ID.HAIR],
  //   colorNotSameAs: [LAYER_ID.BACKGROUND],
  //   weight: 10,
  // },
];
export default hairConfig;
