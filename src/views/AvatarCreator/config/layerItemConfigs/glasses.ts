import { GenderType } from './../../interface/avatar.interface';
import { LayerItemConfig } from './../../interface/layer.interface';
const glassesConfig: LayerItemConfig[] = [
  // {
  //   genderType: GenderType.UNSET,
  //   filename: "Round",
  //   weight: 10,
  // },
  {
    genderType: GenderType.UNSET,
    empty: true,
    weight: 1,
  },
  {
    genderType: GenderType.UNSET,
    filename: '头像初稿_墨镜_方眼镜',
    weight: 2,
  },
  {
    genderType: GenderType.UNSET,
    filename: '头像初稿_扁方眼镜',
    weight: 10,
  },
  {
    genderType: GenderType.UNSET,
    filename: '头像初稿_扁圆眼镜',
    weight: 10,
  },
  {
    genderType: GenderType.UNSET,
    filename: '头像初稿_方眼镜',
    weight: 10,
  },
  {
    genderType: GenderType.UNSET,
    filename: '头像初稿_圆眼镜',
    weight: 10,
  },
];
export default glassesConfig;
