import React, {Component} from 'react';
import {SafeAreaView, View, Text, StyleSheet, Platform, FlatList} from 'react-native';
import FusionCharts from 'react-native-fusioncharts';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      type: 'msline',
      width: '100%',
      height: '50%',
      dataFormat: 'json',
      dataSource: {
        chart: {
          caption: 'Worldwide Smartphone Sales to End Users from 2011 to 2015',
          subcaption: 'By Top 3 Vendors',
          linethickness: '2',
          numberPrefix: '$',
          showvalues: '0',
          formatnumberscale: '1',
          labeldisplay: 'ROTATE',
          slantlabels: '1',
          divLineAlpha: '40',
          anchoralpha: '0',
          animation: '1',
          legendborderalpha: '20',
          drawCrossLine: '1',
          crossLineColor: '#0d0d0d',
          crossLineAlpha: '100',
          tooltipGrayOutColor: '#80bfff',
          theme: 'fusion',
         // bgColor: '#151E30',
          containerBackgroundOpacity: 0,
          bgAlpha:0,
          canvasbgalpha:0

        },
        categories: [
          {
            category: [
              {
                label: "Q1'12",
              },
              {
                label: "Q2'12",
              },
              {
                label: "Q3'12",
              },
              {
                label: "Q4'12",
              },
              {
                label: "Q1'13",
              },
              {
                label: "Q2'13",
              },
              {
                label: "Q3'13",
              },
              {
                label: "Q4'13",
              },
              {
                label: "Q1'14",
              },
              {
                label: "Q2'14",
              },
              {
                label: "Q3'14",
              },
              {
                label: "Q4'14",
              },
              {
                label: "Q1'15",
              },
              {
                label: "Q2'15",
              },
              {
                label: "Q3'15",
              },
              {
                label: "Q4'15",
              },
              {
                label: "Q1'16",
              },
              {
                label: "Q2'16",
              },
              {
                label: "Q3'16",
              },
              {
                label: "Q4'16",
              },
            ],
          },
        ],
        dataset: [
          {
            seriesname: 'Samsung',
            data: [
              {
                value: '716000',
              },
              {
                value: '771700',
              },
              {
                value: '687800',
              },
              {
                value: '698300',
              },
              {
                value: '826100',
              },
              {
                value: '938300',
              },
              {
                value: '892800',
              },
              {
                value: '904300',
              },
              {
                value: '979600',
              },
              {
                value: '1069600',
              },
              {
                value: '1006600',
              },
              {
                value: '1075300',
              },
              {
                value: '1170500',
              },
              {
                value: '1192100',
              },
              {
                value: '1100500',
              },
              {
                value: '974200',
              },
              {
                value: '936200',
              },
              {
                value: '979900',
              },
              {
                value: '887400',
              },
              {
                value: '1020600',
              },
            ],
          },
          {
            seriesname: 'Nokia',
            data: [
              {
                value: '1174600',
              },
              {
                value: '1222800',
              },
              {
                value: '1075600',
              },
              {
                value: '978700',
              },
              {
                value: '1053500',
              },
              {
                value: '1117000',
              },
              {
                value: '831600',
              },
              {
                value: '834200',
              },
              {
                value: '823000',
              },
              {
                value: '850500',
              },
              {
                value: '632200',
              },
              {
                value: '609500',
              },
              {
                value: '630600',
              },
              {
                value: '635800',
              },
              {
                value: '496900',
              },
              {
                value: '438100',
              },
              {
                value: '431300',
              },
              {
                value: '330000',
              },
              {
                value: '276900',
              },
              {
                value: '302900',
              },
            ],
          },
          {
            seriesname: 'Apple',
            data: [
              {
                value: '134800',
              },
              {
                value: '160100',
              },
              {
                value: '168800',
              },
              {
                value: '196300',
              },
              {
                value: '173000',
              },
              {
                value: '354600',
              },
              {
                value: '331200',
              },
              {
                value: '289400',
              },
              {
                value: '246200',
              },
              {
                value: '434600',
              },
              {
                value: '383300',
              },
              {
                value: '319000',
              },
              {
                value: '303300',
              },
              {
                value: '502200',
              },
              {
                value: '430600',
              },
              {
                value: '353500',
              },
              {
                value: '381900',
              },
              {
                value: '601800',
              },
              {
                value: '480900',
              },
              {
                value: '460600',
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
    backgroundColor: 'red'
  },
  heading: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 10,
  },
  chartContainer: {
    height: 500,
    backgroundColor: 'blue',
    padding: 20
  },
});
