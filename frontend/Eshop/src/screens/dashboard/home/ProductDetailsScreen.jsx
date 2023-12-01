import {View, Text} from 'react-native';
import React from 'react';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import CarouselCardItem, {
  ITEM_WIDTH,
  SLIDER_WIDTH,
} from '../../../components/CaroselCard/CarouselCardItem';
import colors from '../../../constants/colors';
import {searchData} from '../../../constants/list';
import WrapperContainer from '../../../components/WrapperContainer/WrapperContainer';
import styles from './styles';

const ProductDetailsScreen = () => {
  const [index, setIndex] = React.useState(0);
  const isCarousel = React.useRef(null);

  return (
    <WrapperContainer>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: colors.white,
        }}>
        <Carousel
          layout="default"
          layoutCardOffset={9}
          ref={isCarousel}
          data={searchData}
          renderItem={CarouselCardItem}
          sliderWidth={SLIDER_WIDTH}
          itemWidth={ITEM_WIDTH}
          onSnapToItem={index => setIndex(index)}
          useScrollView={true}
        />

        <Pagination
          dotsLength={searchData.length}
          activeDotIndex={index}
          carouselRef={isCarousel}
          dotStyle={styles.dotStyle}
          inactiveDotOpacity={0.3}
          inactiveDotScale={0.6}
          tappableDots={true}
        />
      </View>
    </WrapperContainer>
  );
};

export default ProductDetailsScreen;
