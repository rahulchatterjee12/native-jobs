import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'

import styles from './screenheader.style'

const ScreenHeaderBtn = ({ iconUrl, dimension, handelPress }) => {
  return (
    <TouchableOpacity
      style={styles.btnContainer}
      onPress={handelPress}
    >
      <Image
        source={iconUrl}
        resizeMide='cover'
        style={styles.btnImg(dimension)}
      />
    </TouchableOpacity>
  )
}

export default ScreenHeaderBtn