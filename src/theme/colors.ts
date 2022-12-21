export const colors = {
  primary: '#BA2727',
  secondary: '#FFFF',
  lightGray:'#E1E1E1',
  black:'#000',
  white:'#FFFFFF',
  green:'#0FA958',
  gray:'#C4C4C4',
  backgrindColorItem:'#F2F2F2',
  blue:'#188BFF'
};

export const getColors = (colorName: keyof typeof colors) => {
  return colors[colorName];
};
