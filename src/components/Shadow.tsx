import React from 'react';
import DropShadow from 'react-native-drop-shadow';
import { getColors } from '../theme/colors';

interface ShadowPropsI {
    posX?: number;
    posY?: number;
    color?: string;
    opacity?: number;
    radius?: number;
    children: React.ReactElement;
  }

export const Shadow = (props: ShadowPropsI) => {
  const {
    posX = 0,
    posY = 0,
    color = getColors('black'),
    opacity = 0.4,
    radius = 0,
  } = props;

  return (
    <DropShadow
      style={{
        shadowOffset: {
          width: posX,
          height: posY,
        },
        shadowColor: color,
        shadowOpacity: opacity,
        shadowRadius: radius,
      }}>
      {props.children}
    </DropShadow>
  );
};
