
# react-native-temi-bridge

## Getting started

`$ npm install react-native-temi-bridge --save`

### Mostly automatic installation

`$ react-native link react-native-temi-bridge`

### Manual installation


#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import com.temi.reactnative.RNTemiBridgePackage;` to the imports at the top of the file
  - Add `new RNTemiBridgePackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-temi-bridge'
  	project(':react-native-temi-bridge').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-temi-bridge/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-temi-bridge')
  	```


## Usage
```javascript
import RNTemiBridge from 'react-native-temi-bridge';

// TODO: What to do with the module?
RNTemiBridge;
```
  