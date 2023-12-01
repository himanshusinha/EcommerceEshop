import React, {useState} from 'react';
import {View, FlatList} from 'react-native';
import WrapperContainer from '../../../components/WrapperContainer/WrapperContainer';
import Header from '../../../components/Header/Header';
import images from '../../../constants/images';
import {data, searchData} from '../../../constants/list';
import ItemCategories from '../../../components/List/ItemCategories/ItemCategories';
import {moderateScale} from '../../../styles/responsiveSize';
import styles from './styles';
import routes from '../../../constants/routes';
import ItemProducts from '../../../components/List/ItemProducts/ItemProducts';

const HomeScreen = ({navigation}) => {
  const [selectedItem, setSelectedItem] = useState(data[0].id);

  const handleItemPress = title => {
    setSelectedItem(title);
  };
  return (
    <WrapperContainer>
      <View>
        <Header
          title="Our Products"
          imageBackArrow={images.Search}
          onPress={() => {
            navigation.navigate(routes.SEARCH_SCREEN);
          }}
        />
        <FlatList
          contentContainerStyle={styles.listStyle}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={data}
          renderItem={({item, index}) => {
            return (
              <ItemCategories
                item={item}
                isSelected={selectedItem === item.id}
                onPress={() => handleItemPress(item.id)}
              />
            );
          }}
        />
        <FlatList
          contentContainerStyle={styles.listStyle}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={searchData}
          renderItem={({item, index}) => {
            return <ItemProducts item={item} index={index} />;
          }}
        />
      </View>
    </WrapperContainer>
  );
};

export default HomeScreen;
