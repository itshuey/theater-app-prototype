import { normalize } from './methods';
import { colors } from './colors';

export const shapes = {
  box: {
    borderRadius: 5,
  },
  circle: {
    borderRadius: 100,
  },
};

export const outlines = {
  normal: {
    borderWidth: 2,
    borderColor: colors.main,
  },
  accent: {
    borderWidth: 2,
    borderColor: colors.accent,
  }
};

export const fills = {
  normal: {
    backgroundColor: colors.main,
  },
  accent: {
    backgroundColor: colors.accent,
  },
  bg: {
    backgroundColor: colors.bg,
  },
  bg2: {
    backgroundColor: colors.bg2,
  },
};

export const casings = {
  box: {
    ...shapes.box,
  },
  boxOutline: {
    ...shapes.box,
    ...outlines.normal,
  },
  boxOutline2: {
    ...shapes.box,
    ...outlines.accent,
  },
  boxFilled: {
    ...shapes.box,
    ...fills.normal,
  },
  boxFilled2: {
    ...shapes.box,
    ...fills.accent,
  },
  boxFilled3: {
    ...shapes.box,
    ...fills.bg,
  },
  boxFilled4: {
    ...shapes.box,
    ...fills.bg2,
  },
  circle: {
    ...shapes.circle,
  },
  circleOutline: {
    ...shapes.circle,
    ...outlines.normal,
  },
  circleOutline2: {
    ...shapes.circle,
    ...outlines.accent,
  },
  circleFilled: {
    ...shapes.circle,
    ...fills.normal,
  },
  circleFilled2: {
    ...shapes.circle,
    ...fills.accent,
  },
  circleFilled3: {
    ...shapes.circle,
    ...fills.bg,
  },
  circleFilled4: {
    ...shapes.circle,
    ...fills.bg2,
  },
};