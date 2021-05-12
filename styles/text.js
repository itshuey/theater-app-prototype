import { normalize } from './methods';

const sizes = {
  mini: {
    fontSize: normalize(8),
  },
  small: {
    fontSize: normalize(10),
  },
  medium: {
    fontSize: normalize(12),
  },
  large: {
    fontSize: normalize(14),
  },
  xlarge: {
    fontSize: normalize(18),
  },
};

const weights = {
  normal: {
    fontWeight: "400",
  },
  bold: {
    fontWeight: "600",
  },
};

const fonts = {
  logo: {
    fontFamily: 'Hack',
  },
  sans: {
    fontFamily: 'Helvetica',
  },
  serif: {
    fontFamily: 'Times',
  },
};

export const text = {
  headline: {
    ...sizes.xlarge,
    ...weights.bold,
    ...fonts.serif,
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
  title2: {
    ...sizes.medium,
    ...weights.bold,
    ...fonts.sans,
  },
  subtitle2: {
    ...sizes.small,
    ...weights.normal,
    ...fonts.sans,
  }
};