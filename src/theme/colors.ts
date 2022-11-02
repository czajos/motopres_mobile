export const colors = {
  primary: '#BA2727',
  secondary: '#FFFF',
  lightGray:'#E1E1E1',
  black:'#000',
  white:'#FFFFFF',
  green:'#0FA958'
};

export const getColors = (colorName: keyof typeof colors) => {
  return colors[colorName];
};
