const matchAttributesFromFaceAttributeInfos = (faceAttributeInfos) => {
  //判断脸型
  const attributes = {};
  switch (faceAttributeInfos.Shape.Type) {
    case 0:
      attributes.Base = ['方脸'];
      break;
    case 1:
      attributes.Base = ['三角脸'];
      break;
    case 2:
      attributes.Base = ['鹅蛋脸'];
      break;
    case 3:
      attributes.Base = ['心形脸'];
      break;
    case 4:
      attributes.Base = ['圆脸'];
      break;
    default:
      attributes.Base = ['鹅蛋脸'];
  }

  //刘海
  switch (faceAttributeInfos.Hair.Bang.Type) {
    case 0:
      attributes.Bangs = ['刘海'];
      break;
    case 1:
      attributes.Bangs = ['无刘海'];
      break;
    default:
      attributes.Bangs = ['无刘海'];
  }

  //耳朵
  switch (1) {
    default:
      attributes.Ear = ['耳朵'];
  }

  //耳饰
  switch (1) {
    default:
      attributes.EarRing = ['耳饰'];
  }

  //眉毛
  switch (faceAttributeInfos.Eyebrow.EyebrowLength.Type) {
    case 0:
      attributes.Eyebrows = ['短'];
      break;
    case 1:
      attributes.Eyebrows = ['长'];
      break;
    default:
      attributes.Eyebrows = ['短'];
  }
  switch (faceAttributeInfos.Eyebrow.EyebrowDensity.Type) {
    case 0:
      attributes.Eyebrows.push('淡');
      break;
    case 1:
      attributes.Eyebrows.push('浓');
      break;
    default:
      attributes.Eyebrows.push('淡');
  }
  switch (faceAttributeInfos.Eyebrow.EyebrowDensity.Type) {
    case 0:
      attributes.Eyebrows.push('弯眉');
      break;
    case 1:
      attributes.Eyebrows.push('平眉');
      break;
    default:
      attributes.Eyebrows.push('弯眉');
  }

  // 眼睛
  switch (faceAttributeInfos.EyeOpen) {
    case false:
      attributes.Eyes = ['闭眼'];
      break;
    case true:
      attributes.Eyes = ['睁'];
      break;
    default:
      attributes.Eyes = ['睁'];
  }
  switch (faceAttributeInfos.EyeSize) {
    case 0:
      attributes.Eyes.push('小');
      break;
    case 1:
      attributes.Eyes.push('普通');
      break;
    case 2:
      attributes.Eyes.push('大');
      break;
    default:
      attributes.Eyes.push('普通');
  }
};

export default matchAttributesFromFaceAttributeInfos;
