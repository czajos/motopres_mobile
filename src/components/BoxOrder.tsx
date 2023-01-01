import React, {useState} from 'react';
import {Box, Row, Text} from 'native-base';
import {DEVICE_WIDTH} from '../config';
import {getColors} from '../theme/colors';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {t} from 'i18next';
import {useSSR, useTranslation} from 'react-i18next';
import ArrowDownSvg from '../assets/svg/ArrowDownSvg';
import ArrowUpSvg from '../assets/svg/ArrowUpSvg';
import {
  LongPressGestureHandler,
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
  PanGestureHandlerProps,
  Swipeable,
} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import XSvg from '../assets/svg/XSvg';
import CheckSmallSvg from '../assets/svg/CheckSmallSvg';

interface BoxOrderI
  extends Pick<PanGestureHandlerProps, 'simultaneousHandlers'> {
  condition?: string;
  collect_date?: string;
  part?: string;
  band_number?: string | number;
  indexx?: number;
  company?: string;
  commentArea?: string;
  note?: string;
  regenerated: any;
  deposit?: boolean;
  fv?: boolean;
  price?: number | string;
  internal_id?: number | string;
}

export const BoxOrder = ({
  condition,
  collect_date,
  part,
  band_number,
  indexx,
  company,
  commentArea,
  note,
  regenerated,
  deposit,
  fv,
  price,
  internal_id,
}: BoxOrderI) => {
  const marginHorizontal: number = 5;
  const widthBox = DEVICE_WIDTH - marginHorizontal * 2;
  const {t} = useTranslation();
  const [showMoreInfo, setShowMoreInfo] = useState<boolean>(false);
  const [actualHeight, setActualHeight] = useState<number>();

  const BOX_HEIGHT = actualHeight;
  const itemHeight = useSharedValue(BOX_HEIGHT);
  const translateX = useSharedValue(0);
  const marginVertical = useSharedValue(5);
  const threshold = DEVICE_WIDTH / 2;
  const panGesture = useAnimatedGestureHandler<PanGestureHandlerGestureEvent>({
    onActive: e => {
      translateX.value = e.translationX;
    },
    onEnd: () => {
      if (translateX.value > threshold) {
        // deleteNotifications()
        translateX.value = withTiming(DEVICE_WIDTH * 2);
        itemHeight.value = withTiming(0);
        marginVertical.value = withTiming(0);
      } else if (translateX.value < -threshold) {
        // translateX.value = withTiming(-DEVICE_WIDTH)
        // itemHeight.value = withTiming(0)
        // marginVertical.value = withTiming(0, undefined, (isFinished) => {
        //   // if (isFinished && deleteNotifications) {
        //   //   return runOnJS(deleteNotifications)()
        //   // }
        // })
      } else {
        translateX.value = withTiming(0);
      }
    },
  });

  const animatedHorizontalStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: translateX.value,
        },
      ],
    };
  });

  const animatedVerticalStyle = useAnimatedStyle(() => {
    return {height: itemHeight.value, marginVertical: marginVertical.value};
  });

  const renderLeftActions = (progress, dragX) => {
    const trans = dragX.interpolate({
      inputRange: [0, 50, 100, 101],
      outputRange: [-20, 0, 0, 1],
    });
  };
  return (
    <Animated.View style={[animatedHorizontalStyle, animatedVerticalStyle]}>
      <Box
        onLayout={event => {
          var {x, y, width, height} = event.nativeEvent.layout;
          setActualHeight(height);
        }}
        w={widthBox}
        minH={'200px'}
        shadow={3}
        backgroundColor={
          regenerated === 'Regenerowane'
            ? getColors('white')
            : getColors('backgrindColorItem')
        }
        marginY={'5px'}
        borderRadius={'10px'}>
        <Row justifyContent={'center'} alignItems={'center'} paddingY={'10px'}>
          <Text
            textAlign={'center'}
            style={[
              styles.textHeader,
              {
                width: widthBox / 3,
              },
            ]}>
            {internal_id}
          </Text>
          <View
            style={{
              borderRightWidth: 1,
              borderLeftWidth: 1,
              borderColor: getColors('lightGray'),
              paddingHorizontal: 15,
            }}>
            <Text
              textAlign={'center'}
              style={[
                styles.textHeader,
                {
                  width: widthBox / 3,
                },
              ]}>
              {condition}
            </Text>
          </View>

          <Text
            textAlign={'center'}
            style={[
              styles.textHeader,
              {
                color: getColors('green'),
                width: widthBox / 3,
              },
            ]}>
            {collect_date}
          </Text>
        </Row>
        <Row justifyContent={'center'} marginTop={'10px'}>
          <Text textAlign={'center'} style={[styles.textHeader]}>
            {t('home.commodity')}
          </Text>
          <Text textAlign={'center'} fontSize={15} style={[styles.textData]}>
            {' ' + part}
          </Text>
        </Row>
        <Row
          justifyContent={'space-between'}
          borderTopWidth={1}
          borderBottomWidth={1}
          borderColor={getColors('lightGray')}
          paddingY={'10px'}
          marginTop={'15px'}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              borderRightWidth: 1,
              borderColor: getColors('lightGray'),
              // paddingHorizontal: 10,
              width: '15%',
            }}>
            <Text textAlign={'center'} style={[styles.textHeader]}>
              {t('home.deposit')}
            </Text>
            {deposit ? <CheckSmallSvg /> : <XSvg />}
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              borderRightWidth: 1,
              borderColor: getColors('lightGray'),
              // paddingHorizontal: 10,
              width: '15%',
            }}>
            <Text style={[styles.textHeader]}>{t('home.facture')}</Text>
            {fv ? <CheckSmallSvg /> : <XSvg />}
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              borderRightWidth: 1,
              borderColor: getColors('lightGray'),
              paddingHorizontal: 5,
              width: '20%',
            }}>
            <Text textAlign={'center'} style={[styles.textHeader]}>
              {regenerated === 'Regenerowane'
                ? t('home.band')
                : t('home.price')}
            </Text>
            <Text style={styles.textData}>
              {regenerated === 'Regenerowane' ? band_number : price}
            </Text>
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              borderRightWidth: 1,
              borderColor: getColors('lightGray'),
              paddingHorizontal: 10,
              width: '20%',
            }}>
            <Text textAlign={'center'} style={[styles.textHeader]}>
              {t('home.index')}
            </Text>
            <Text style={styles.textData}>{indexx}</Text>
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              paddingHorizontal: 10,
            }}>
            <Text textAlign={'center'} style={[styles.textHeader]}>
              {t('home.contractor')}
            </Text>
            <Text style={styles.textData}>{company}</Text>
          </View>
        </Row>
        <View
          style={{
            marginTop: 15,
            paddingHorizontal: 10,
            paddingBottom: 10,
            alignItems: 'center',
          }}>
          <Text textAlign={'center'} fontSize={15} style={[styles.textHeader]}>
            {t('home.info')}
          </Text>
          <Text
            style={[styles.textData, {textAlign: 'center', flexWrap: 'wrap'}]}
            // numberOfLines={showMoreInfo === false ? 1 : 10}
          >
            {note}
          </Text>
        </View>
        {/* <TouchableOpacity
          onPress={() => setShowMoreInfo(!showMoreInfo)}
          style={{alignItems: 'center', padding: 10}}>
          {showMoreInfo ? <ArrowUpSvg /> : <ArrowDownSvg />}
        </TouchableOpacity> */}
      </Box>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  textHeader: {
    fontFamily: 'Montserrat-Bold',
    color: getColors('black'),
    fontSize: 12,
  },
  textData: {
    fontFamily: 'Montserrat-Regular',
    color: getColors('black'),
    fontSize: 12,
  },
});
