import { Dimensions, Platform, PixelRatio } from 'react-native';
import Layout from '../constants/Layout'

const { width, height } = Dimensions.get('window');

import { normalize } from './methods';

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
    alignItems: 'flex-start',
  },
  stretch: {
    flex: 1,
    margin: normalize(20),
    alignItems: 'stretch',
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
    paddingHorizontal: normalize(15),
    paddingTop: normalize(50),
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    backgroundColor: 'white',
    zIndex: 2,
    width: '100%' 
  },
  items: {
    marginTop: normalize(5),
    marginHorizontal: normalize(20),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'transparent',
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
    marginHorizontal: normalize(10),
  },
  smallCardText: {
    width: width/3,
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

  },
  title: {
    marginTop: normalize(20),
  },
  card: {
    flex: 2,
    marginTop: normalize(10),
  },
  header: {
    paddingTop: 2,
  },
};