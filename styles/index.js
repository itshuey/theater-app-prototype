import { StyleSheet } from 'react-native';

import * as Text from './text';
import * as Colors from './colors';
import * as Casings from './casings';
import * as Spacings from './spacings';

export default styles = StyleSheet.create({
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
    ...Spacings.containers.cardContainer,
    ...Casings.casings.boxFilled,
    backgroundColor: Colors.colors.bg2,
  },
  smallCard: {
    ...Spacings.containers.smallCardContainer,
    ...Casings.casings.boxFilled,
    backgroundColor: Colors.colors.bg2,
  },
  headlineText: {
    ...Spacings.text.normal,
    ...Text.text.headline,
    color: Colors.colors.main,
  },
  titleText: {
    ...Spacings.text.normal,
    ...Text.text.title,
    color: Colors.colors.main,
  },
  subtitleText: {
    ...Spacings.text.normal,
    ...Text.text.subtitle,
    color: Colors.colors.main,
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
  image: {
    ...Casings.casings.box,
    ...Spacings.objects.image,
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