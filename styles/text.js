import { normalize } from './methods';

const sizes = {
  mini: {
    fontSize: normalize(12),
  },
  small: {
    fontSize: normalize(15),
  },
  medium: {
    fontSize: normalize(18),
  },
  large: {
    fontSize: normalize(24),
  },
  xlarge: {
    fontSize: normalize(48),
  },
};

const weights = {
  normal: {
    fontWeight: "400"
  },
  bold: {
    fontWeight: "600"
  },
};

const fonts = {
  logo: {
    fontFamily: 'Hack'
  },
  sans: {
    fontFamily: 'Helvetica'
  },
  serif: {
    fontFamily: 'Times'
  },
};

export const text = {
  headline: {
    ...sizes.xlarge,
    ...weights.bold,
    ...fonts.sans,
  },
  title: {
    ...sizes.large,
    ...weights.bold,
    ...fonts.sans,
  },
  subtitle: {
    ...sizes.medium,
    ...weights.normal,
    ...fonts.sans,
  },
  body: {
    ...sizes.small,
    ...weights.normal,
    ...fonts.sans,
  },
  caption: {
    ...sizes.mini,
    ...weights.normal,
    ...fonts.sans,
  },
};