// Chart.js
import {View, Dimensions} from 'react-native';
import React from 'react';
import {PieChart} from 'react-native-chart-kit';
import colors from '../../constants/colors';
import {moderateScale} from '../../styles/responsiveSize';

const screenWidth = Dimensions.get('screen').width - 60 - 75;

const Chart = ({inStockCount, outOfStockCount}) => {
  const data = [
    {
      name: 'Out of Stock',
      population: outOfStockCount,
      color: colors.themeColor,
      legendFontColor: colors.BLACK,
    },
    {
      name: 'In Stock',
      population: inStockCount,
      color: colors.themeColor_2,
      legendFontColor: colors.BLACK,
    },
  ];
  const chartConfig = {
    color: (opacity = 1) => `rgba(26,255,146,${opacity})`,
  };

  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: moderateScale(20),
        backgroundColor: colors.color5,
        marginHorizontal: moderateScale(20),
        borderRadius: moderateScale(10),
        elevation: 5, // Add elevation for Android
        shadowColor: colors.BLACK, // Add shadow color for iOS
        shadowOffset: {width: 0, height: 2}, // Add shadow offset for iOS
        shadowOpacity: 0.3, // Add shadow opacity for iOS
        shadowRadius: 2, // Add shadow radius for iOS
      }}>
      <PieChart
        data={data}
        width={screenWidth}
        height={150}
        chartConfig={chartConfig}
        accessor={'population'}
        backgroundColor={colors.color5}
        absolute
      />
    </View>
  );
};

export default Chart;
