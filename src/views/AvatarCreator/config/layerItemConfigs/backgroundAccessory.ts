import { GenderType, LAYER_ID } from '../../interface/avatar.interface';
import { LayerItemConfig } from '../../interface/layer.interface';
import { avaiableColors } from '../avaiable-colors';
const backgroundAccessoryConfig: LayerItemConfig[] = [
  {
    genderType: GenderType.UNSET,
    filename: '背景装饰_白猫举爪',
    weight: 1,
    avaiableColorGroups: avaiableColors[LAYER_ID.BACKGROUND_ACCESSORY],
  },
  {
    genderType: GenderType.UNSET,
    filename: '背景装饰_白猫举爪2',
    weight: 1,
    avaiableColorGroups: avaiableColors[LAYER_ID.BACKGROUND_ACCESSORY],
  },
  {
    genderType: GenderType.UNSET,
    filename: '背景装饰_白猫挠挠1',
    weight: 1,
    avaiableColorGroups: avaiableColors[LAYER_ID.BACKGROUND_ACCESSORY],
  },
  {
    genderType: GenderType.UNSET,
    filename: '背景装饰_白猫挠挠2',
    weight: 1,
    avaiableColorGroups: avaiableColors[LAYER_ID.BACKGROUND_ACCESSORY],
  },
  {
    filename: '背景装饰_飞船1',
    genderType: GenderType.UNSET,
    weight: 1,
    avaiableColorGroups: avaiableColors[LAYER_ID.BACKGROUND_ACCESSORY],
  },
  {
    filename: '背景装饰_飞船2',
    genderType: GenderType.UNSET,
    weight: 1,
    avaiableColorGroups: avaiableColors[LAYER_ID.BACKGROUND_ACCESSORY],
  },
  {
    genderType: GenderType.UNSET,
    filename: '背景装饰_黑猫--稀有',
    weight: 0.1,
    avaiableColorGroups: avaiableColors[LAYER_ID.BACKGROUND_ACCESSORY],
  },
  {
    genderType: GenderType.UNSET,
    filename: '背景装饰_黄猫举爪',
    weight: 1,
    avaiableColorGroups: avaiableColors[LAYER_ID.BACKGROUND_ACCESSORY],
  },
  {
    genderType: GenderType.UNSET,
    filename: '背景装饰_黄猫举爪2',
    weight: 1,
    avaiableColorGroups: avaiableColors[LAYER_ID.BACKGROUND_ACCESSORY],
  },
  {
    genderType: GenderType.UNSET,
    filename: '背景装饰_黄猫挠挠',
    weight: 1,
    avaiableColorGroups: avaiableColors[LAYER_ID.BACKGROUND_ACCESSORY],
  },
  {
    genderType: GenderType.UNSET,
    filename: '背景装饰_黄猫挠挠2',
    weight: 1,
    avaiableColorGroups: avaiableColors[LAYER_ID.BACKGROUND_ACCESSORY],
  },
  {
    genderType: GenderType.UNSET,
    filename: '背景装饰_小白鸟',
    weight: 3,
    avaiableColorGroups: avaiableColors[LAYER_ID.BACKGROUND_ACCESSORY],
  },
  {
    genderType: GenderType.UNSET,
    filename: '背景装饰_小黄鸟',
    weight: 3,
    avaiableColorGroups: avaiableColors[LAYER_ID.BACKGROUND_ACCESSORY],
  },
  {
    genderType: GenderType.UNSET,
    filename: '背景装饰_小蓝鸟',
    weight: 3,
    avaiableColorGroups: avaiableColors[LAYER_ID.BACKGROUND_ACCESSORY],
  },
  {
    genderType: GenderType.UNSET,
    empty: true,
    weight: 50,
  },
];
export default backgroundAccessoryConfig;
