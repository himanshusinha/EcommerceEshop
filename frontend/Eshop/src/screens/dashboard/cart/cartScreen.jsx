import {View, FlatList, Text} from 'react-native';
import React from 'react';
import WrapperContainer from '../../../components/WrapperContainer/WrapperContainer';
import {searchData} from '../../../constants/list';
import ItemCart from '../../../components/List/ItemCart/ItemCart';
import styles from './styles';
import ButtonComp from '../../../components/Button/ButtonComp';

const cartScreen = () => {
  return (
    <WrapperContainer>
      <View style={{flex: 1}}>
        <FlatList
          data={searchData}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: searchData.length > 1 ? 20 : 40,
          }}
          renderItem={({item, index}) => <ItemCart item={item} />}
          keyExtractor={(item, index) => index.toString()}
        />
        <View style={styles.itemContainer}>
          <Text>5 Items</Text>
          <Text>Rs 1,50,000</Text>
        </View>
        <ButtonComp style={styles.buttonStyle} text="Checkout" />
      </View>
    </WrapperContainer>
  );
};

export default cartScreen;
