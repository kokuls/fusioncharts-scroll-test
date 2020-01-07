import React, {Component} from 'react';
import {SafeAreaView, View,Text, StyleSheet, Platform} from 'react-native';
import FusionCharts from 'react-native-fusioncharts';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      type: 'msline',
      width: '100%',
      height: '100%',
      dataFormat: 'json',
      dataSource: {
        chart: {
          caption: 'Reach of Social Media Platforms amoung youth',
          yaxisname: '% of youth on this platform',
          subcaption: '2012-2016',
          showhovereffect: '1',
          numbersuffix: '%',
          drawcrossline: '1',
          plottooltext: '<b>$dataValue</b> of youth were on $seriesName',
          theme: 'fusion',
        },
        categories: [
          {
            category: [
              {
                label: '2012',
              },
              {
                label: '2013',
              },
              {
                label: '2014',
              },
              {
                label: '2015',
              },
              {
                label: '2016',
              },
            ],
          },
        ],
        dataset: [
          {
            seriesname: 'Facebook',
            data: [
              {
                value: '62',
              },
              {
                value: '64',
              },
              {
                value: '64',
              },
              {
                value: '66',
              },
              {
                value: '78',
              },
            ],
          },
          {
            seriesname: 'Instagram',
            data: [
              {
                value: '16',
              },
              {
                value: '28',
              },
              {
                value: '34',
              },
              {
                value: '42',
              },
              {
                value: '54',
              },
            ],
          },
          {
            seriesname: 'LinkedIn',
            data: [
              {
                value: '20',
              },
              {
                value: '22',
              },
              {
                value: '27',
              },
              {
                value: '22',
              },
              {
                value: '29',
              },
            ],
          },
          {
            seriesname: 'Twitter',
            data: [
              {
                value: '18',
              },
              {
                value: '19',
              },
              {
                value: '21',
              },
              {
                value: '21',
              },
              {
                value: '24',
              },
            ],
          },
        ],
      },
    };

    this.libraryPath = Platform.select({
      // Specify fusioncharts.html file location
      ios: require('./assets/fusioncharts.html'),
      android: {uri: 'file:///android_asset/fusioncharts.html'},
    });
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.heading}>
          FusionCharts Integration with React Native
        </Text>
        <View style={styles.chartContainer}>
          <FusionCharts
            type={this.state.type}
            width={this.state.width}
            height={this.state.height}
            dataFormat={this.state.dataFormat}
            dataSource={this.state.dataSource}
            libraryPath={this.libraryPath} // set the libraryPath property
          />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  heading: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 10,
  },
  chartContainer: {
    height: 500,
  },
});
