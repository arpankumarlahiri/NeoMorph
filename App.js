import React, {useState} from 'react';
import {View, SafeAreaView, TouchableOpacity, ScrollView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const squareDimensionGlobal = 200;
const shadowDimensionGlobal = 7;
const shadowRadiusGlobal = 7;
const borderRadiusGlobal = 40

const colorObject = {
  'green' : {
    shadowLightColor : '#faff3f',
    shadowDarkColor : '#b8c82f',
    bgColor : '#d9eb37',
    gradColor: [ '#c3d432', '#e8fb3b'],
  },
  'red' : {
    shadowLightColor : '#ff715d',
    shadowDarkColor : '#d95345',
    bgColor : '#ff6251',
    gradColor: [ '#e65849', '#ff6957'],
  },
  'purple': {
    shadowLightColor : '#f364ff',
    shadowDarkColor : '#b34ad8',
    bgColor : '#d357fe',
    gradColor: [ '#be4ee5', '#e25dff'],
  },
  'blue': {
    shadowLightColor : '#5ff5ff',
    shadowDarkColor : '#47b5d7',
    bgColor : '#53d5fd',
    gradColor: [ '#4bc0e4', '#59e4ff'],
  }
}

const colorArray = ['green', 'red', 'purple', 'blue']


const App = () => {
  const [currentColor, setcurrentColor] = useState(colorArray[2])
  const [clicked, setclicked] = useState(false);

  const box = ({bgColor, borderRadius, shadowLightColor, shadowLength, shadowBreadth, shadowRadius, squareLength, squareBreadth, shadowDarkColor}) => (
    <View
      style={{
        shadowColor: shadowLightColor,
        shadowOffset: {width: -shadowBreadth,height: -shadowLength},
        shadowOpacity: 1,
        shadowRadius: shadowRadius,
      }}
    >
      <View 
        style={{
          width: squareBreadth, 
          height: squareLength, 
          backgroundColor: bgColor, 
          borderRadius: borderRadius, 
          shadowColor: shadowDarkColor,
          shadowOffset: {width: shadowBreadth,height: shadowLength},
          shadowOpacity: 1,
          shadowRadius: shadowRadius,
        }} 
      />
    </View>
  );
  const boxClicked = ({bgColor, gradColor, borderRadius, shadowLightColor, shadowLength, shadowBreadth, shadowRadius, squareLength, squareBreadth, shadowDarkColor}) => (
    <View
      style={{
        shadowColor: shadowLightColor,
        shadowOffset: {width: -shadowBreadth,height: -shadowLength},
        shadowOpacity: 1,
        shadowRadius: shadowRadius,
      }}
    >
      <View 
        style={{
          width: squareBreadth, 
          height: squareLength, 
          backgroundColor: bgColor, 
          borderRadius: borderRadius, 
          shadowColor: shadowDarkColor,
          shadowOffset: {width: shadowBreadth,height: shadowLength},
          shadowOpacity: 1,
          shadowRadius: shadowRadius,
        }} 
      >
        <LinearGradient colors={gradColor} start={{x: 0.0, y: 0.0}} end={{x: 0.5, y: 1.0}}
          style={{
            width: squareBreadth, 
            height: squareLength, 
            borderRadius: borderRadius, 
          }} 
        />
      </View>

    </View>
  );
  return (
    <SafeAreaView style={{flex:1, justifyContent:'space-around', alignItems:'center', backgroundColor: colorObject[currentColor].bgColor}}>
      {/* <View style={{flexDirection: 'row', marginTop: 40,width: '100%', justifyContent: 'space-around'}}>
        {colorArray.map((colorObjectItem) => (
          <TouchableOpacity activeOpacity={1} onPress={() => setcurrentColor(colorObjectItem)}>
            {
              box({
                ...colorObject[colorObjectItem],
                squareLength: 50,
                squareBreadth: 50,
                shadowLength: shadowDimensionGlobal,
                shadowBreadth: shadowDimensionGlobal,
                shadowRadius: shadowRadiusGlobal,
                borderRadius: 12,
              })
            }
          </TouchableOpacity>
        ))}

      </View> */}
      <View style={{flex: 1,paddingTop: 20, alignItems: 'center',justifyContent: 'space-around', width: '100%'}}>
        <View style={{flexDirection: 'row', justifyContent:'space-between', width: '100%', marginBottom: 40, paddingHorizontal: 20}}>
          {box({
            ...colorObject[currentColor],
            squareLength: 50,
            squareBreadth: 50,
            shadowLength: shadowDimensionGlobal,
            shadowBreadth: shadowDimensionGlobal,
            shadowRadius: shadowRadiusGlobal,
            borderRadius: 25,
          })}
          {box({
            ...colorObject[currentColor],
            squareLength: 50,
            squareBreadth: 280,
            shadowLength: shadowDimensionGlobal,
            shadowBreadth: shadowDimensionGlobal,
            shadowRadius: shadowRadiusGlobal,
            borderRadius: 10,
          })}
        </View>
        <TouchableOpacity activeOpacity={1} onPress={()=> {
          setclicked(true);
          setTimeout(() => {
            setclicked(false);
          }, 250);
        }} style={{alignSelf: 'flex-start', marginLeft: 20, marginBottom: 40}}>
          {clicked ? (
            boxClicked({
              ...colorObject[currentColor],
              squareLength: squareDimensionGlobal,
              squareBreadth: squareDimensionGlobal,
              shadowLength: shadowDimensionGlobal,
              shadowBreadth: shadowDimensionGlobal,
              shadowRadius: shadowRadiusGlobal,
              borderRadius: borderRadiusGlobal,
            })
          ) : (
            box({
              ...colorObject[currentColor],
              squareLength: squareDimensionGlobal,
              squareBreadth: squareDimensionGlobal,
              shadowLength: shadowDimensionGlobal,
              shadowBreadth: shadowDimensionGlobal,
              shadowRadius: shadowRadiusGlobal,
              borderRadius: borderRadiusGlobal,
            })
          )} 
        </TouchableOpacity>
        <View style={{height: 120, width: '100%', marginBottom: 40}}>
          <ScrollView showsHorizontalScrollIndicator={false} horizontal style={{ flex: 1, paddingHorizontal: 20}} contentContainerStyle={{alignItems:'center'}}>
            {[...Array(10)].map(() => (
              <View style={{marginEnd: 100}}>
                {
                  box({
                    ...colorObject[currentColor],
                    squareLength: 100,
                    squareBreadth: 180,
                    shadowLength: shadowDimensionGlobal,
                    shadowBreadth: shadowDimensionGlobal,
                    shadowRadius: shadowRadiusGlobal,
                    borderRadius: 10,
                  })
                }
              </View>
            ))}
          </ScrollView>
        </View>
        <View style={{ flex: 1}} />
      </View>
    </SafeAreaView>
  )
}

export default App;