const oldTintColorLight = '#2f95dc';
const tintColorLight = 'black';
const tintColorDark = '#fff';
const mauve = "#f2ece6";

export default {
  experimental: {
    text: 'white',
    background: '#fff',
    tint: 'white',
    tabIconDefault: 'gray',
    tabIconSelected: 'white',
    backgroundColor: '#1a1a1a',
  },
  light: {
    text: '#000',
    background: '#fff',
    tint: tintColorLight,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorLight,
    backgroundColor: mauve,
  },
  dark: {
    text: '#fff',
    background: '#000',
    tint: tintColorDark,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorDark,
    backgroundColor: '#f2ece6',
  },
};
