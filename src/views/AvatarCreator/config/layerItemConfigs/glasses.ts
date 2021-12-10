import { avaiableColors } from '../avaiable-colors';
import { GenderType, LAYER_ID } from './../../interface/avatar.interface';
import { LayerItemConfig } from './../../interface/layer.interface';
const glassesConfig: LayerItemConfig[] = [
  // {
  //   genderType: GenderType.UNSET,
  //   filename: "Round",
  //   weight: 10,
  // },
  {
    filename: '无眼镜',
    genderType: GenderType.UNSET,
    empty: true,
    weight: 20,
  },
  {
    genderType: GenderType.UNSET,
    filename: '头像初稿_墨镜',
    avaiableColorGroups: avaiableColors[LAYER_ID.GLASSES],
    weight: 2,
  },
  {
    genderType: GenderType.UNSET,
    filename: '头像初稿_扁方眼镜',
    avaiableColorGroups: avaiableColors[LAYER_ID.GLASSES],
    weight: 10,
  },
  {
    genderType: GenderType.UNSET,
    filename: '头像初稿_扁圆眼镜',
    avaiableColorGroups: avaiableColors[LAYER_ID.GLASSES],
    weight: 10,
  },
  {
    genderType: GenderType.UNSET,
    filename: '头像初稿_方眼镜',
    avaiableColorGroups: avaiableColors[LAYER_ID.GLASSES],
    weight: 10,
  },
  {
    genderType: GenderType.UNSET,
    filename: '头像初稿_圆眼镜',
    avaiableColorGroups: avaiableColors[LAYER_ID.GLASSES],
    weight: 10,
  },
];
export default glassesConfig;
