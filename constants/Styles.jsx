import { StyleSheet } from 'react-native';

// will refactor styles in a bit

export default StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },
  safeContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  stdContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  userList: {
    marginTop: 20,
  },
  boxContainer: {
    backgroundColor: 'white',
    marginTop: 20,
    backgroundColor: 'transparent',
    marginHorizontal: 30,
  },
  longContainer: {
    flex: 1,
    paddingTop: 2,
    backgroundColor: '#fff8f7',
  },
  contentContainer: {
    backgroundColor: 'transparent',
    marginHorizontal: 30,
  },
  aboutContainer: {
    borderRadius: 5,
    marginVertical: 20,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 12,
    paddingBottom: 30,
  },
  aboutText: {
    lineHeight: 19,
  },
  sectionInfoContainer: {
    marginBottom: 20
  },
  followInfoContainer: {
    marginTop: 8,
    flexDirection: 'row',
  },
  followContainer: {
    flexDirection: 'row',
    marginRight: 5,
  },
  followNumberText: {
    fontSize: 12,
    fontWeight: "600",
  },
  followText: {
    fontSize: 12,
  },
  imageContainer: {
    alignSelf: 'center',
    marginTop: 20,
    borderRadius:60,
    height: 120,
    width: 120,
  },
  reflectionsContainer: {
    borderRadius: 4,
    width: "95%",
    paddingTop: 5,
    paddingBottom: 5,
    marginVertical: 5,
  },
  reflectionImageContainer: {
    borderRadius: 10,
    borderColor: 'gray',
    borderWidth: 1,
    height: 160,
    flex: 2,
  },
  ppContainer: {
    borderRadius:40,
    height: 70,
    width: 70,
  },
  navContainer: {
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
  },
  navContainerActions: {
    flexDirection: 'row',
  },
  contentContainer: {
    marginTop: 50,
    backgroundColor: 'transparent',
    marginHorizontal: 30,
  },
  formSectionContainer: {
    marginBottom: 20,
  },
  formSectionText: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: '600',
  },
  formBlockContainer: {
    marginTop: 10,
  },
  formButtonContainer: {
    marginTop: 10,
    alignItems: 'center'
  },
  formHeaderText: {
    fontSize: 12,
    fontWeight: '300',
  },
  formResponseText: {
    fontSize: 15,
    fontWeight: '300',
  },
  formResponseContainer: {
    marginTop: 5,
    paddingBottom: 5,
    borderBottomWidth: 1.5,
    borderBottomColor: 'purple',
  },
  nameFormResponseContainer: {
    borderRadius: 5,
    marginVertical: 10,
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
    paddingBottom: 8,
    paddingLeft: 20,
    paddingRight: 20,
  },
  savedContainer: {
    flexDirection: 'row',
  },
  savedImageContainer: {
    marginTop: 10,
    borderRadius: 10,
    height: 100,
    width: 80,
    marginRight: 12,
  },
  editContainer: {
    alignSelf: 'flex-end',
    marginTop: 5,
    marginTop: 15,
  },
  titleInfoContainer: {
    flex: 3,
  },
  infoContainer: {
    borderRadius: 10,
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 15,
    paddingRight: 15,
    marginVertical: 5,
    marginHorizontal: 10,
    borderColor: 'gray',
    borderWidth: 1,
  },
  descriptionContainer: {
    borderRadius: 10,
    borderTopColor: 'gray',
  },
  authorInfoContainer: {
    borderTopColor: 'lightgray',
    borderTopWidth: 0.5,
    marginVertical: 20,
  },
  searchBarContainer: {
    width: '70%',
    marginTop: 40,
  },
  titleContainer: {
    marginBottom: 5,
    marginLeft: 10,
    flexDirection: 'row',
  },
  spaceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tagContainer: {
    flexDirection: 'row',
    marginTop: 4,
    marginBottom: 40,
  },
  tag: {
    borderColor: '#a9a9a9',
    borderWidth: 1,
    borderRadius: 10,
    marginHorizontal: 2,
    paddingLeft: 7,
    paddingRight: 7,
    paddingTop: 3,
    paddingBottom: 3,
  },
  tagText: {
    fontSize: 11,
    color: '#a9a9a9',
  },
  titleInfoContainer: {
    marginLeft: 15,
  },
  titleText: {
    fontSize: 24,
    fontWeight: '600',
  },
  containerTitleText: {
    fontWeight: 'bold',
    fontSize: 18
  },
  reviewHeaderText: {
    marginTop: 10,
    marginBottom: 20,
    fontSize: 16,
  },
  handleText: {
    marginTop: 1,
    color: 'gray',
  },
  headerText: {
    fontSize: 18,
    paddingTop: 2,
  },
  descriptionText: {
    color: 'gray',
    fontSize: 16,
    marginTop: 20,
    marginBottom: 40,
  },
  aboutText: {
    marginTop: 5,
    fontSize: 14,
    color: 'gray',
  },
  ticketText: {
    marginVertical: 10,
    fontSize: 14,
    marginLeft: 5,
    fontWeight: 'bold',
  },
  showInfoText: {
    fontSize: 14,
    color: 'gray',
  },
  showTitleText: {
    fontSize: 30,
  },
  showInfoContainer: {
    flexDirection: 'row',
    marginVertical: 2,
  },
  ticketContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 3,
    paddingBottom: 3,
    marginBottom: 15,
    borderColor: 'black',
    borderWidth: 1,
  },
  castBlock: {
    marginVertical: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  infoBlockHeaderText: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 10,
  },
  infoText: {
    marginBottom: 10,
  },
  infoBlockContainer: {
    marginBottom: 20,
    marginTop: 5
  },
  imageContainer: {
    borderRadius: 10,
    borderColor: 'gray',
    borderWidth: 1,
    height: 160,
    flex: 2,
  },
  resultsHeaderText: {
    fontWeight: '400',
    fontSize: 18,
    marginTop: 40,
  },
  searchBar: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    fontSize: 18,
  },
  userList: {
    marginTop: 20,
  },
  userItemContainer: {
    borderRadius: 8,
    paddingTop: 8,
    paddingBottom: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  userName: {
    marginVertical: 1,
    fontSize: 18,
  },
  userHandle: {
    color: 'gray',
  },
  button: {
    marginTop: 20,
    borderColor: 'purple',
    borderWidth: 1,
    borderRadius: 15,
    paddingTop: 2,
    paddingBottom: 2,
    backgroundColor: 'white',
    width: "200%",
    alignSelf: 'center',
  },
  buttonText: {
    textAlign: 'center',
    color: 'purple',
    fontSize: 16,
  },
  addButton: {
    marginTop: 20,
    borderColor: 'purple',
    borderWidth: 1,
    borderRadius: 15,
    paddingTop: 2,
    paddingBottom: 2,
    backgroundColor: 'white',
    width: 25,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  createImage: {
    height: 40,
    width: 40,
    position: "absolute",
    bottom: 20,
    right: 20,
  },
  picker: {
    marginTop: 5,
    paddingBottom: 5,
  },
  card: {
    flex: 1,
    paddingTop: 2,
    backgroundColor: '#f2f6fc'
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
  loginContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 185,
  },
  loginText: {
    fontSize: 50,
    color: 'white',
    fontWeight: '100',
    fontStyle: 'italic',
    marginBottom: 40,
  },
  formInput: {
    color: 'white',
    fontSize: 18,
    width: 230,
    marginBottom: 25,
    borderColor: 'white',
    borderWidth: 0.5,
    borderRadius: 5,
    paddingLeft: 8,
    paddingBottom: 1.5,
    paddingTop: 1,
    fontWeight: '100',
  },
  signInButtonText: {
    color: 'white',
    fontSize: 14,
  },
  enterContainer: {
    marginTop: 3,
    width: 230,
    alignItems: 'flex-end',
  },
  signInButton: {
    flexDirection: 'row',
  },
  arrow: {
    paddingTop: 2.5,
    paddingRight: 3,
  }
});