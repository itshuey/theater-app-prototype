import React from 'react';
import { Text, StyleSheet } from 'react-native';

import SingleEntry from '../components/SingleEntry';

export default function MultiEntry({title, subtitles, placeholders, vals, onValUpdates}) {
  return (
  <React.Fragment>
  <Text style={styles.formSectionText}>{title}</Text>
  {subtitles.map((sub, index) =>
    <SingleEntry
      key={sub}
      title={sub}
      placeholder={placeholders[index]}
      val={vals[index]}
      onValUpdate={onValUpdates[index]}
    />)}
  </React.Fragment>
  );
};

const styles = StyleSheet.create({
  formSectionText: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: '600',
  },
});