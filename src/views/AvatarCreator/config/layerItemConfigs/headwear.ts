import { avaiableColors } from './../avaiable-colors';
import { GenderType, LAYER_ID } from './../../interface/avatar.interface';
import { LayerItemConfig } from './../../interface/layer.interface';
const headwearConfig: LayerItemConfig[] = [
  {
    empty: true,
    weight: 30,
    genderType: GenderType.UNSET,
  },
  {
    filename: '头像初稿_女-发饰 -108',
    genderType: GenderType.FEMALE,
    avaiableColorGroups: avaiableColors[LAYER_ID.HAIR],
    colorNotSameAs: [LAYER_ID.BACKGROUND],
    weight: 10,
    // removeLayers: [LAYER_ID.FACIAL_HAIR],
  },
  {
    filename: '头像初稿_女-发饰 -110',
    genderType: GenderType.FEMALE,
    avaiableColorGroups: avaiableColors[LAYER_ID.HAIR],
    colorNotSameAs: [LAYER_ID.BACKGROUND],
    weight: 10,
    // removeLayers: [LAYER_ID.FACIAL_HAIR],
  },
  {
    filename: '头像初稿_女-发饰 -113',
    genderType: GenderType.FEMALE,
    avaiableColorGroups: avaiableColors[LAYER_ID.HAIR],
    colorNotSameAs: [LAYER_ID.BACKGROUND],
    weight: 10,
    // removeLayers: [LAYER_ID.FACIAL_HAIR],
  },
  {
    filename: '头像初稿_女-发饰',
    genderType: GenderType.FEMALE,
    avaiableColorGroups: avaiableColors[LAYER_ID.HAIR],
    colorNotSameAs: [LAYER_ID.BACKGROUND],
    weight: 10,
    // removeLayers: [LAYER_ID.FACIAL_HAIR],
  },
];

export default headwearConfig;
