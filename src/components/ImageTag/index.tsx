import React from 'react';

import Logo from '../../assets/logo.svg';

interface TagImages {
  src: string | null;
  alt: string | null;
}

const ImageTag: React.FC<TagImages> = ({ alt, src, ...rest }: TagImages) => {
  if (src && alt) {
    return <img src={src} alt={alt} {...rest} />;
  }
  return <img src={Logo} alt="Logo da GoBarber." {...rest} />;
};

export default ImageTag;
