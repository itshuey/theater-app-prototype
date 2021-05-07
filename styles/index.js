import { StyleSheet } from 'react-native';

import * as Text from './text';
import * as Colors from './colors';
import * as Casings from './casings';
import * as Spacings from './spacings';

export default styles = StyleSheet.create({
  none: {
    display: 'none',
  },
  fullView: {
    ...Spacings.containers.safe,
    backgroundColor: Colors.colors.bg,
  },
  scrollView: {
    ...Spacings.containers.scroll,
  },
  navView: {
    ...Spacings.containers.nav,
  },
  bg: {
    ...Spacings.bg.bg,
    backgroundColor: Colors.colors.bg,
  },
  contentView: {
    ...Spacings.containers.normal,
  },
  contentStretchView: {
    ...Spacings.containers.stretch,
  },
  dynamicView: {
    ...Spacings.containers.dyn,
    backgroundColor: 'transparent',
  },
  titleView: {
    ...Spacings.containers.dyn2,
    backgroundColor: 'transparent',
  },
  bodyView: {
    ...Spacings.containers.dyn3,
    backgroundColor: 'transparent',
  },
  contentViewLeft: {
    ...Spacings.containers.left,
    ...Casings.shapes.box,
  },
  contentViewBorderless: {
    ...Casings.shapes.box,
    ...Spacings.containers.noMargin,
  },
  ghost: {
    ...Casings.shapes.box,
    ...Spacings.containers.ghost,
  },
  ghost2: {
    ...Casings.shapes.box,
    ...Spacings.containers.ghost2,
  },
  itemView: {
    ...Spacings.containers.items,
  },
  textField: {
    ...Spacings.objects.smallEntry,
    ...Text.text.body,
    ...Casings.casings.boxOutline,
    backgroundColor: Colors.colors.bg,
  },
  boxField: {
    ...Spacings.objects.largeEntry,
    ...Text.text.body,
    ...Casings.casings.boxOutline,
    backgroundColor: Colors.colors.bg,
  },
  card: {
    ...Spacings.containers.card,
    ...Casings.casings.boxFilled,
    backgroundColor: Colors.colors.bg2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5
  },
  smallCard: {
    ...Spacings.containers.smallCard,
    ...Casings.casings.boxFilled,
    backgroundColor: Colors.colors.bg2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5
  },
  smallCardText: {
    ...Spacings.containers.smallCardText,
    ...Casings.casings.boxFilled,
    backgroundColor: 'transparent',
  },
  headlineText: {
    ...Spacings.text.normal,
    ...Text.text.headline,
    color: Colors.colors.main,
  },
  headerText: {
    ...Spacings.text.header,
    ...Text.text.header,
  },
  titleText: {
    ...Spacings.text.normal,
    ...Text.text.title,
    color: Colors.colors.main,
  },
  subtitleText: {
    ...Spacings.text.normal,
    ...Text.text.subtitle,
    color: Colors.colors.accent,
  },
  bodyText: {
    ...Spacings.text.normal,
    ...Text.text.body,
    color: Colors.colors.main,
  },
  captionText: {
    ...Spacings.text.normal,
    ...Text.text.caption,
    color: Colors.colors.main,
  },
  bio: {
    ...Casings.casings.boxOutline,
    ...Spacings.objects.largeEntry,
    ...Text.text.body,
    color: Colors.colors.main,
  },
  cardTitleText: {
    ...Spacings.text.card,
    ...Text.text.title2,
    color: Colors.colors.main,
  },
  cardSubtitleText: {
    ...Spacings.text.card,
    ...Text.text.subtitle2,
    color: Colors.colors.accent,
  },
  image: {
    ...Casings.casings.box,
    ...Spacings.objects.image,
  },
  fullImage: {
    ...Casings.shapes.box,
    ...Spacings.objects.fullImage,
  },
  fullImageBack: {
    ...Casings.shapes.box,
    ...Spacings.objects.fullImageBack,
  },
  profPic:{
    ...Casings.casings.circle,
    ...Spacings.objects.small,
  },
  button: {
    ...Casings.casings.circleFilled,
    ...Spacings.objects.small,
  },
  largeButton: {
    ...Casings.casings.boxFilled,
    ...Spacings.objects.smallEntry,
  },
  icon: {
    ...Spacings.objects.small,
  },
});