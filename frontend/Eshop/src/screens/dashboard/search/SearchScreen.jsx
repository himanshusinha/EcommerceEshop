import React from 'react';
import {View, FlatList, Text, Image, StyleSheet} from 'react-native';
import WrapperContainer from '../../../components/WrapperContainer/WrapperContainer';
import Search from '../../../components/Search/Search';
import {searchData} from '../../../constants/list';
import styles from './styles';

const SearchScreen = () => {
  return (
    <WrapperContainer>
      <View style={styles.container}>
        <Search placeholder={'Search'} />
        <FlatList
          data={searchData}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: searchData.length > 1 ? 40 : 20,
          }}
          renderItem={({item, index}) => (
            <View style={styles.listItem}>
              <Image style={styles.image} source={item.image} />
              <View style={styles.textContainer}>
                <Text>{item.title}</Text>
              </View>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </WrapperContainer>
  );
};
export default SearchScreen;
