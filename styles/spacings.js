import { Dimensions, Platform, PixelRatio } from 'react-native';
import Layout from '../constants/Layout'

const { width, height } = Dimensions.get('window');

import { normalize } from './methods';

export const bg = {
  bg: {
    flex: 1,
    alignItems: 'center',
    resizeMode: 'cover',
    justifyContent: 'center'
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
    alignItems: 'flex-start',
  },
  fullCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  dyn: {
    margin: normalize(10),
  },
  dyn2: {
    marginHorizontal: normalize(20),
  },
  dyn3: {
    marginHorizontal: normalize(20),
    marginTop: normalize(10),
  },
  noMargin: {
    flex: 1,
    alignItems: 'flex-start',
  },
  dynBorderless: {
    alignItems: 'flex-start',
  },
  dynBorderlessRight: {
    alignItems: 'flex-end',
  },
  ghost: {
    paddingBottom: normalize(20),
    alignItems: 'flex-start',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
  },
  ghost2: {
    paddingBottom: normalize(20),
    alignItems: 'flex-start',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
  },
  left: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  nav: {
    marginTop: normalize(5),
    marginHorizontal: normalize(20),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  items: {
    marginTop: normalize(5),
    marginHorizontal: normalize(20),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  split: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  splitVertical: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  card: {
    margin: normalize(20),
    height: height/5,
    width: width-normalize(40),
  },
  smallCard: {
    height: width/3,
    width: width/3,
    marginTop: normalize(10),
  },
  doubleSmallCard: {
    height: width/4,
    width: width/4,
    marginTop: normalize(5),
  },
  smallCardText: {
    width: width/3,
  },
  columns: {
    flex: 1,
    justifyContent: 'space-around',
  },
};

export const objects = {
  small: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    padding: normalize(10),
    height: normalize(40),
  },
  image: {
    height: normalize(160),
    flex: 2,
    overflow: 'hidden',
  },
  fullImage: {
    flex: 1,
    resizeMode: 'cover',
    overflow: 'hidden',
  },
  fullImageBack: {
    flex: 1,
    resizeMode: 'cover',
    overflow: 'hidden',
    justifyContent: 'flex-end',
  },
  smallEntry: {
    marginTop: normalize(5),
    padding: normalize(10),
  },
  largeEntry: {
    marginTop: normalize(5),
    paddingBottom: normalize(5),
    height: normalize(100),
  },
  bottomButton: {
    position: 'absolute',
    bottom: normalize(20),
    right: normalize(20),
  },
  bottomButton2: {
    position: 'absolute',
    bottom: normalize(80),
    right: normalize(20),
  },
};

export const text = {
  normal: {

  },
  title: {
    marginTop: normalize(20),
  },
  card: {
    flex: 2,
    marginTop: normalize(10),
  },
};