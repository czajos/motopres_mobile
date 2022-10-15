export const colors = {
  primary: '#BA2727',
  secondary: '#FFFF',
  gray:'#6A6868',
  black:'#000',
  white:'#FFFFFF'
};

export const getColors = (colorName: keyof typeof colors) => {
  return colors[colorName];
};
