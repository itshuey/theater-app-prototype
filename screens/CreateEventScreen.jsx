import React, { useState } from 'react';
import { View, Text, ScrollView, SafeAreaView, Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';

import { createEvent } from '../api/firebaseMethods';
import styles from '../styles/index';

import MultiEntry from '../components/MultiEntry';
import BlockEntry from '../components/BlockEntry';
import CommaSeparated from '../components/CommaSeparated';
import Flipper from '../components/Flipper';
import CastFieldList from '../components/CastFieldList';

export default function CreateEventScreen({ navigation }) {
  const [charCount, setCharCount] = useState(0)

  const [showName, setShowName] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState([]);
  const [dates, setDates] = useState('');
  const [cast, setCast] = useState([{name:'', role:''}]);

  const [ticketPrice, setTicketPrice] = useState('');
  const [ticketLink, setTicketLink] = useState('');
  const [intermission, setIntermission] = useState(false);
  const [ticketRequired, setTicketRequired] = useState(false);
  const toggleIntermission = () => setIntermission(previousState => !previousState);
  const toggleTicketRequired = () => setTicketRequired(previousState => !previousState);

  const [venueName, setVenueName] = useState('');
  const [venueAddress, setVenueAddress] = useState('');
  const [wheelchair, setWheelchair] = useState(false)
  const [hearingAssistance, setHearingAssistance] = useState(false);
  const toggleWheelchair = () => setWheelchair(previousState => !previousState);
  const toggleHearingAssistance = () => setHearingAssistance(previousState => !previousState);

  const emptyState = () => {
    setShowName('');
    setDescription('');
    setTags([]);
    setDates('');
    setCast([{name:'',role:''}]);
    setTicketPrice('');
    setTicketLink('');
    setIntermission(false);
    setTicketRequired(false);
    setVenueName('');
    setVenueAddress('');
    setWheelchair(false);
    setHearingAssistance(false);
  };

  const handlePress = () => {
    if (!showName) {
      Alert.alert('Show name is required!');
    } else if (!venueName) {
      Alert.alert('Venue name is required!');
    } else if (!venueAddress) {
      Alert.alert('Venue Address is required.');
    } else if (charCount > 1000) {
      Alert.alert('Description must be less than 1000 characters.')
    } else {
      createEvent(
        showName,
        description,
        tags,
        dates,
        cast,
        ticketPrice,
        ticketLink,
        intermission,
        ticketRequired,
        venueName,
        venueAddress,
        wheelchair,
        hearingAssistance,
      );
      navigation.navigate('Explore');
      emptyState();
    }
  };

  const onChange = (index, name, role) => {
    console.log(cast);
    console.log(name, role);
    console.log(index);
    name = name === null ? cast[index].name : name;
    role = role === null ? cast[index].role : role;
    const entry = {name, role};
    setCast([...cast.slice(0, index), entry, ...cast.slice(index+1, cast.length)]);
  };

  const addNewCastBlock = () => {
    setCast([...cast, {name:"", role:""}]);
  };

  const removeCastBlock = () => {
    setCast(cast.slice(0,-1));
  };

  return (
    <SafeAreaView style={styles.fullView}>
      <View style={styles.navView}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Create Event</Text>
        <Ionicons name="chevron-back" size={24} color="white" />
      </View>
      <ScrollView>
        <View style={[styles.contentStretchView, {marginTop: 60}]}>
          <View style={styles.contentStretchView}>
            <MultiEntry
                title={'Basic Information'}
                subtitles={['Show Name', 'Dates']}
                placeholders={['Enter show name', 'Dates (ex. 4/07-4/10)']}
                vals={[showName, dates]}
                onValUpdates={[setShowName, setDates]}
              />
            <BlockEntry
              title={'Description'}
              placeholder={'A brief description'}
              numChars={1000}
              chars={charCount}
              block={description}
              onCharsUpdate={setCharCount}
              onBlockUpdate={setDescription}
            />
            <CommaSeparated
              title={'Tags'}
              placeholder={'Tags here (comma separated)'}
              val={tags}
              onValUpdate={setTags}
            />
          </View>

          <View style={styles.contentStretchView}>
            <CastFieldList
              title={'Cast & Creatives'}
              cast={cast}
              onTextUpdate={onChange}
            />
            <View style={styles.itemView}>
              <TouchableOpacity onPress={() => addNewCastBlock()} >
                <Ionicons name="ios-add-circle-outline" size={24} color="purple" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => removeCastBlock()} >
                  <Ionicons name="ios-remove-circle-outline" size={24} color="black" />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.contentStretchView}>
            <MultiEntry
              title={'Venue Information'}
              subtitles={['Venue Name', 'Venue Address']}
              placeholders={['Enter venue name', 'Enter venue address']}
              vals={[venueName, venueAddress]}
              onValUpdates={[setVenueName, setVenueAddress]}
            />
            <View style={styles.itemView}>
              <Flipper
                title={'Hearing Assistance?'}
                val={hearingAssistance}
                onValUpdate={toggleHearingAssistance}
              />
              <Flipper
                title={'Wheelchair?'}
                val={wheelchair}
                onValUpdate={toggleWheelchair}
              />
            </View>
          </View>

          <View style={styles.contentStretchView}>
            <MultiEntry
              title={'Logistical Information'}
              subtitles={['Minimum Ticket Price', 'Ticket Link']}
              placeholders={['e.g. $25.00', 'e.g. https://example.com']}
              vals={[ticketPrice, ticketLink]}
              onValUpdates={[setTicketPrice, setTicketLink]}
            />
            <View style={styles.itemView}>
              <Flipper
                title={'Intermission'}
                val={intermission}
                onValUpdate={toggleIntermission}
              />
              <Flipper
                title={'Ticket Required?'}
                val={ticketRequired}
                onValUpdate={toggleTicketRequired}
              />
            </View>
          </View>

          <View style={{ 
              borderColor: "purple", borderRadius: 20, borderWidth: 2, paddingVertical: 4,
              marginHorizontal: 50, marginTop:30, marginBottom: 90, alignItems: 'center' }}>
            <TouchableOpacity onPress={handlePress} >
              <Text style={{fontSize: 16, color: "purple"}}>Click to Create!</Text>
             </TouchableOpacity>
           </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}