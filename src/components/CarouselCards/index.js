import React, {useState, useRef} from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import Swiper from 'react-native-swiper';
import data from 'assets/data';
import styles from './CarouselCardsStyles';
import {useFloatingHeight} from 'service/dimensions';

export const CarouselCards = ({navigation}) => {
  const floatingHeight = useFloatingHeight();
  const [index, setIndex] = useState(0);
  const swiperRef = useRef(null);

  const handleSkip = () => {
    swiperRef.current.scrollBy(3, true);
  };

  const handleNext = () => {
    if (index < 3) {
      swiperRef.current.scrollBy(1, true);
    }
  };

  return (
    <View style={styles.container}>
      <Swiper
        ref={swiperRef}
        loop={false}
        showsPagination={false}
        onIndexChanged={index => setIndex(index)}>
        {data.map((item, index) => (
          <View style={styles.caruselList} key={index}>
            <View style={styles.box}>
              <Image source={item.src} />
            </View>
            <View style={styles.header}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.body}>{item.body}</Text>
            </View>
          </View>
        ))}
      </Swiper>

      <View
        style={
          index === 3
            ? styles.hidden
            : {
                ...styles.paginationContainer,
                marginBottom: floatingHeight > 400 ? 40 : 20,
              }
        }>
        <TouchableOpacity onPress={handleSkip}>
          <Text style={{...styles.btn, color: '#D3D3D3'}}>Skip</Text>
        </TouchableOpacity>

        <View style={styles.paginationDotsContainer}>
          {[0, 1, 2, 3].map(item => (
            <View
              key={item}
              style={[
                styles.paginationDot,
                index === item ? styles.activeDot : styles.inactiveDot,
              ]}
            />
          ))}
        </View>
        <TouchableOpacity onPress={handleNext}>
          <Text
            style={{
              ...styles.btn,
              color: '#222',
            }}>
            Next
          </Text>
        </TouchableOpacity>
      </View>

      {index === 3 && (
        <View style={styles.section}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Registration')}
            style={{
              ...styles.button,
              marginBottom: floatingHeight > 400 ? 20 : 0,
            }}>
            <Text style={styles.buttonTitle}>Get Started</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};
