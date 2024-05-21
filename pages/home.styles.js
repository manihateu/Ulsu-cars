import {Dimensions, StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      height: Dimensions.get('screen').height,
      rowGap: 25,
      paddingVertical: 10
    },
    auto_model: {
        backgroundColor: '#F3F4F9',
        // height: 224,
        width: Dimensions.get('screen').width - 40,
        marginHorizontal: 'auto',   
        borderRadius: 48,
        padding: 15,
        position: 'relative'
    },
    text_back: {
        color: "#9B9B9A",
        fontSize: 12
    },
    car_logo: {
        width: 100,
        height: 100,
        marginHorizontal: 'auto',
        backgroundColor: "#D4D4DF",
        borderRadius: 24
    }
  })