import { avaiableColors } from '../avaiable-colors';
import { GenderType, LAYER_ID } from './../../interface/avatar.interface';
import { LayerItemConfig } from './../../interface/layer.interface';
const earRingConfig: LayerItemConfig[] = [
  // {
  //   genderType: GenderType.UNSET,
  //   filename: "Hoop",
  //   weight: 10,
  // avaiableColorGroups:avaiableColors[LAYER_ID.ear_EAR_RINGRing]
  // },

  // {
  //   genderType: GenderType.UNSET,
  //   filename: "Stud",
  //   weight: 10,
  // avaiableColorGroups:avaiableColors[LAYER_ID.ear_EAR_RINGRing]
  //   congratulate: true,
  // },

  {
    genderType: GenderType.FEMALE,
    filename: '头像初稿_女-耳饰-18',
    weight: 10,
    avaiableColorGroups: avaiableColors[LAYER_ID.EAR_RING],
  },

  {
    genderType: GenderType.FEMALE,
    filename: '头像初稿_女-耳饰-19',
    weight: 10,
    avaiableColorGroups: avaiableColors[LAYER_ID.EAR_RING],
  },

  {
    genderType: GenderType.FEMALE,
    filename: '头像初稿_女-耳饰-54',
    weight: 10,
    avaiableColorGroups: avaiableColors[LAYER_ID.EAR_RING],
  },

  {
    genderType: GenderType.FEMALE,
    filename: '头像初稿_女-耳饰-105',
    weight: 10,
    avaiableColorGroups: avaiableColors[LAYER_ID.EAR_RING],
  },

  {
    genderType: GenderType.FEMALE,
    filename: '头像初稿_女-耳饰-107',
    weight: 10,
    avaiableColorGroups: avaiableColors[LAYER_ID.EAR_RING],
  },

  {
    genderType: GenderType.FEMALE,
    filename: '头像初稿_女-耳饰-109',
    weight: 10,
    avaiableColorGroups: avaiableColors[LAYER_ID.EAR_RING],
  },

  {
    genderType: GenderType.FEMALE,
    filename: '头像初稿_女-耳饰-111',
    weight: 10,
    avaiableColorGroups: avaiableColors[LAYER_ID.EAR_RING],
  },

  {
    genderType: GenderType.FEMALE,
    filename: '头像初稿_女-耳饰-112',
    weight: 10,
    avaiableColorGroups: avaiableColors[LAYER_ID.EAR_RING],
  },

  {
    genderType: GenderType.MALE,
    filename: '头像初稿_男-耳钉-56',
    weight: 10,
    avaiableColorGroups: avaiableColors[LAYER_ID.EAR_RING],
  },

  {
    genderType: GenderType.MALE,
    filename: '头像初稿_男-耳钉-57',
    weight: 10,
    avaiableColorGroups: avaiableColors[LAYER_ID.EAR_RING],
  },

  {
    genderType: GenderType.UNSET,
    filename: '头像初稿_男女-耳机',
    weight: 10,
    avaiableColorGroups: avaiableColors[LAYER_ID.EAR_RING],
  },

  {
    genderType: GenderType.UNSET,
    empty: true,
    weight: 30,
  },
];
export default earRingConfig;
