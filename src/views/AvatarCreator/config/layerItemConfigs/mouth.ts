import { avaiableColors } from '../avaiable-colors';
import { GenderType, LAYER_ID } from './../../interface/avatar.interface';
import { LayerItemConfig } from './../../interface/layer.interface';
const mouthConfig: LayerItemConfig[] = [
  // {
  //   filename: 'Frown',
  //   genderType: GenderType.UNSET,
  //   weight: 10,
  // },
  // {
  //   filename: 'indifferent',
  //   genderType: GenderType.UNSET,
  //   weight: 10,
  // },
  // {
  //   filename: 'Laughing',
  //   genderType: GenderType.UNSET,
  //   weight: 10,
  // },
  // {
  //   filename: 'Nervous',
  //   genderType: GenderType.UNSET,
  //   weight: 10,
  // },
  // {
  //   filename: 'open',
  //   genderType: GenderType.UNSET,
  //   weight: 10,
  // },
  // {
  //   filename: 'Pucker',
  //   genderType: GenderType.UNSET,
  //   weight: 10,
  // },
  // {
  //   filename: 'Sad',
  //   genderType: GenderType.UNSET,
  //   weight: 10,
  // },
  // {
  //   filename: 'Smile-1',
  //   genderType: GenderType.UNSET,
  //   weight: 10,
  // },
  // {
  //   filename: 'Smile-2',
  //   genderType: GenderType.UNSET,
  //   weight: 10,
  // },
  // {
  //   filename: 'Smile',
  //   genderType: GenderType.UNSET,
  //   weight: 10,
  // },
  {
    filename: '头像初稿_悲伤_闭嘴',
    genderType: GenderType.UNSET,
    avaiableColorGroups: avaiableColors[LAYER_ID.MOUTH],
    weight: 10,
  },
  {
    filename: '头像初稿_惊讶_张嘴',
    genderType: GenderType.UNSET,
    avaiableColorGroups: avaiableColors[LAYER_ID.MOUTH],
    weight: 10,
  },
  {
    filename: '头像初稿_开心呲牙_张嘴',
    genderType: GenderType.UNSET,
    avaiableColorGroups: avaiableColors[LAYER_ID.MOUTH],
    weight: 10,
    removeLayers: [LAYER_ID.FACIAL_HAIR],
  },
  {
    filename: '头像初稿_开心吹泡泡_闭嘴',
    genderType: GenderType.UNSET,
    avaiableColorGroups: avaiableColors[LAYER_ID.MOUTH],
    weight: 2,
    removeLayers: [LAYER_ID.MASK, LAYER_ID.FACIAL_HAIR],
  },
  {
    filename: '头像初稿_开心笑_张嘴',
    genderType: GenderType.UNSET,
    avaiableColorGroups: avaiableColors[LAYER_ID.MOUTH],
    weight: 10,
  },
  {
    filename: '头像初稿_微笑_闭嘴',
    genderType: GenderType.UNSET,
    avaiableColorGroups: avaiableColors[LAYER_ID.MOUTH],
    weight: 10,
  },
];

export default mouthConfig;
