import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from './popularjobcard.style';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { checkImageURL } from '../../../../utils';

const PopularJobCard = ({ item, selectedJob, handelCardPress }) => {
  console.log(item.item.employer_logo)
  return (
    <TouchableOpacity
      style={styles.container(selectedJob, item.item)}
      onPress={() => handelCardPress(item.item)}
    >
      <TouchableOpacity
        style={styles.logoContainer(selectedJob, item.item)}
      >
        <Image
          source={{
            uri: item.item.employer_logo ? item.item.employer_logo :
              "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg"
          }}
          resizeMode='contain'
          style={styles.logoImage}
        />
      </TouchableOpacity>
      <Text style={styles.companyName} numberOfLines={1} >{item.item.employer_name}</Text>

      <View style={styles.infoContainer}>
        <Text style={styles.jobName(selectedJob, item.item)} numberOfLines={1}>
          {item.item.job_title}
        </Text>
        <Text style={styles.location}>{item.item.job_country}</Text>
      </View>

    </TouchableOpacity>
  )
}

export default PopularJobCard