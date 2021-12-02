import React, { useState, useEffect, useRef } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height / 3;

const Weight = ({}) => {
  return (
    //TODO: implement a date selector to view this month's weight entries, potentially a filter for all time
    <View style={styles.chartWrapper}>
      <LineChart
        data={{
          labels: ["January", "February", "March", "April", "May", "June"],
          datasets: [
            {
              data: [
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
              ],
            },
          ],
        }}
        width={width / 1.05} // from react-native
        height={height}
        //yAxisLabel="$"
        yAxisSuffix="lb"
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          backgroundColor: "#008800",
          backgroundGradientFrom: "#118811",
          backgroundGradientTo: "#228822",
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: "#545454",
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 12,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  chartWrapper: {
    alignItems: "center",
    marginTop: 15,
  },
});

export default Weight;
