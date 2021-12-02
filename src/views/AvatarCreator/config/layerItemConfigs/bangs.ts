import { avaiableColors } from './../avaiable-colors';
import { GenderType, LAYER_ID } from './../../interface/avatar.interface';
import { LayerItemConfig } from './../../interface/layer.interface';
const bangsConfig: LayerItemConfig[] = [
  {
    filename: '头像初稿_男发_有刘海-9',
    genderType: GenderType.MALE,
    avaiableColorGroups: avaiableColors[LAYER_ID.BANGS],
    colorNotSameAs: [LAYER_ID.BACKGROUND, LAYER_ID.BASE],
    weight: 10,
    removeLayers: [LAYER_ID.HAIR],
  },
  {
    filename: '头像初稿_男发_有刘海-11',
    genderType: GenderType.MALE,
    avaiableColorGroups: avaiableColors[LAYER_ID.BANGS],
    colorNotSameAs: [LAYER_ID.BACKGROUND, LAYER_ID.BASE],
    weight: 10,
    removeLayers: [LAYER_ID.HAIR],
  },
  {
    filename: '头像初稿_男发_无刘海_秃头-13',
    genderType: GenderType.MALE,
    avaiableColorGroups: avaiableColors[LAYER_ID.BANGS],
    colorNotSameAs: [LAYER_ID.BACKGROUND, LAYER_ID.BASE],
    weight: 3,
    removeLayers: [LAYER_ID.HAIR],
  },
  {
    filename: '头像初稿_男发_无刘海-15',
    genderType: GenderType.MALE,
    avaiableColorGroups: avaiableColors[LAYER_ID.BANGS],
    colorNotSameAs: [LAYER_ID.BACKGROUND, LAYER_ID.BASE],
    weight: 10,
    removeLayers: [LAYER_ID.HAIR],
  },
  {
    filename: '头像初稿_男发_有刘海-20',
    genderType: GenderType.MALE,
    avaiableColorGroups: avaiableColors[LAYER_ID.BANGS],
    colorNotSameAs: [LAYER_ID.BACKGROUND, LAYER_ID.BASE],
    weight: 10,
    removeLayers: [LAYER_ID.HAIR],
  },
  {
    filename: '头像初稿_男发_有刘海-73',
    genderType: GenderType.MALE,
    avaiableColorGroups: avaiableColors[LAYER_ID.BANGS],
    colorNotSameAs: [LAYER_ID.BACKGROUND, LAYER_ID.BASE],
    weight: 10,
    removeLayers: [LAYER_ID.HAIR],
  },
  {
    filename: '头像初稿_男发_无刘海-74',
    genderType: GenderType.MALE,
    avaiableColorGroups: avaiableColors[LAYER_ID.BANGS],
    colorNotSameAs: [LAYER_ID.BACKGROUND, LAYER_ID.BASE],
    weight: 10,
    removeLayers: [LAYER_ID.HAIR],
  },
  {
    filename: '头像初稿_男发_无刘海-75',
    genderType: GenderType.MALE,
    avaiableColorGroups: avaiableColors[LAYER_ID.BANGS],
    colorNotSameAs: [LAYER_ID.BACKGROUND, LAYER_ID.BASE],
    weight: 10,
    removeLayers: [LAYER_ID.HAIR],
  },
  {
    filename: '头像初稿_男发_无刘海_鸡冠-103',
    genderType: GenderType.MALE,
    avaiableColorGroups: avaiableColors[LAYER_ID.BANGS],
    colorNotSameAs: [LAYER_ID.BACKGROUND, LAYER_ID.BASE],
    weight: 5,
    removeLayers: [LAYER_ID.HAIR],
  },
  {
    filename: '头像初稿_女有刘海-21',
    colorSameAs: LAYER_ID.HAIR,
    genderType: GenderType.FEMALE,
    avaiableColorGroups: avaiableColors[LAYER_ID.HAIR],
    colorNotSameAs: [LAYER_ID.BACKGROUND, LAYER_ID.BASE],
    weight: 10,
    removeLayers: [LAYER_ID.FACIAL_HAIR],
  },
  {
    filename: '头像初稿_女有刘海-24',
    colorSameAs: LAYER_ID.HAIR,
    genderType: GenderType.FEMALE,
    avaiableColorGroups: avaiableColors[LAYER_ID.HAIR],
    colorNotSameAs: [LAYER_ID.BACKGROUND, LAYER_ID.BASE],
    weight: 10,
    removeLayers: [LAYER_ID.FACIAL_HAIR],
  },
  {
    filename: '头像初稿_女有刘海-76',
    colorSameAs: LAYER_ID.HAIR,
    genderType: GenderType.FEMALE,
    avaiableColorGroups: avaiableColors[LAYER_ID.HAIR],
    colorNotSameAs: [LAYER_ID.BACKGROUND, LAYER_ID.BASE],
    weight: 10,
    removeLayers: [LAYER_ID.FACIAL_HAIR],
  },
  {
    filename: '头像初稿_女无刘海-22',
    colorSameAs: LAYER_ID.HAIR,
    genderType: GenderType.FEMALE,
    avaiableColorGroups: avaiableColors[LAYER_ID.HAIR],
    colorNotSameAs: [LAYER_ID.BACKGROUND, LAYER_ID.BASE],
    weight: 10,
    removeLayers: [LAYER_ID.FACIAL_HAIR],
  },
  {
    filename: '头像初稿_女无刘海-23',
    colorSameAs: LAYER_ID.HAIR,
    genderType: GenderType.FEMALE,
    avaiableColorGroups: avaiableColors[LAYER_ID.HAIR],
    colorNotSameAs: [LAYER_ID.BACKGROUND, LAYER_ID.BASE],
    weight: 10,
    removeLayers: [LAYER_ID.FACIAL_HAIR],
  },
  {
    filename: '头像初稿_女无刘海-69',
    colorSameAs: LAYER_ID.HAIR,
    genderType: GenderType.FEMALE,
    avaiableColorGroups: avaiableColors[LAYER_ID.HAIR],
    colorNotSameAs: [LAYER_ID.BACKGROUND, LAYER_ID.BASE],
    weight: 10,
    removeLayers: [LAYER_ID.FACIAL_HAIR],
  },
  {
    filename: '头像初稿_女无刘海-70',
    colorSameAs: LAYER_ID.HAIR,
    genderType: GenderType.FEMALE,
    avaiableColorGroups: avaiableColors[LAYER_ID.HAIR],
    colorNotSameAs: [LAYER_ID.BACKGROUND, LAYER_ID.BASE],
    weight: 10,
    removeLayers: [LAYER_ID.FACIAL_HAIR],
  },
  {
    filename: '头像初稿_女无刘海-77',
    colorSameAs: LAYER_ID.HAIR,
    genderType: GenderType.FEMALE,
    avaiableColorGroups: avaiableColors[LAYER_ID.HAIR],
    colorNotSameAs: [LAYER_ID.BACKGROUND, LAYER_ID.BASE],
    weight: 10,
    removeLayers: [LAYER_ID.FACIAL_HAIR],
  },
];
export default bangsConfig;
