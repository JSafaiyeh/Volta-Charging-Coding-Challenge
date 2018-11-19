# Volta Charging Coding Challenge

### Features
* Pulled data from `/stations`
* Lazy loading of Stations list
* Display Map of each Station w/ `react-native-maps`
* Open address in Apple Maps for directions
* Tags for station attributes
* Calculate distance from station with user's location

### Caveats 
* React Native's location permission does not have a success callback, first load does not show distance
  * Request location permission on previous sign up screens before list (ideal)
  * Use `react-native-permissions` and `react-native-navigation`'s lifecycle methods to build the logic to render distance after initial permission grant
* Android requires API Key to display map

### Running
* `yarn install`
* `react-native link`
* `react-native run-ios`
