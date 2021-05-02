import { Dimensions, Platform, PixelRatio } from 'react-native';

import normalize from './methods';

const {
  width: SCREEN_WIDTH,
  height: SCREEN_HEIGHT,
} = Dimensions.get('window');

export const bg = {
  bg: {
    flex: 1,
    alignItems: 'center',
    resizeMode: 'cover',
  },
};

export const containers = {
  full: {
    flex: 1,
    justifyContent: 'center',
  },
  scroll: {
    marginTop: normalize(20),
    marginHorizontal: normalize(30),
  },
  normal: {
    flex: 1,
    margin: normalize(20),
    alignItems: 'center',
  },
  nav: {
    marginTop: normalize(5),
    marginHorizontal: normalize(20),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  items: {
    marginTop: normalize(5),
    marginBottom: normalize(5),
    marginHorizontal: normalize(20),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  card: {
    flex: 1,
    height: (height/3),
    margin: normalize(20),
  },
  smallCard: {
    flexDirection: 'row',
    flex: 3,
    height: ((height/3) - normalize(20)),
    margin: normalize(10),
  },
};

export const objects = {
  small: {
    alignSelf: 'center',
    margin: normalize(20),
    padding: normalize(2),
    height: normalize(40),
  },
  image: {
    height: normalize(160),
    flex: 2,
  },
  smallEntry: {
    marginTop: normalize(5),
    paddingBottom: normalize(5),
  },
  largeEntry: {
    marginTop: normalize(5),
    paddingBottom: normalize(5),
    height: normalize(100),
  },
};

export const text = {
  normal: {
    marginTop: normalize(10),
    paddingBottom: normalize(10),
  },
};