import React from 'react';
import { Text, View, ScrollView } from 'react-native';
// import { LineChart, Grid } from 'react-native-svg-charts'
import PureChart from 'react-native-pure-chart';
import { Cabecalho } from './Components/Cabecalho';

const TesteGrafico = (props) => {
  const data1 = [0, 25, 50, 75, 100]
  const sampleData = [
    {
      seriesName: 'esperado',
      data: [
        { x: '2020-03-04', y: 0 },
        { x: '2020-03-05', y: 25 },
        { x: '2020-03-06', y: 50 },
        { x: '2020-03-07', y: 75 },
        { x: '2020-03-08', y: 100 },
        { x: '2020-03-09', y: 100 }],
      color: 'green'
    },
    {
      seriesName: 'realizado',
      data: [
        { x: '2020-03-04', y: 0 },
        { x: '2020-03-05', y: 25 },
        { x: '2020-03-06', y: 25 },
        { x: '2020-03-07', y: 50 },
        { x: '2020-03-08', y: 75 },
        { x: '2020-03-09', y: 100 },
        { x: '2020-03-10', y: 100 }],
      color: 'blue'
    }
  ]

  return (
		<ScrollView>
			<Cabecalho navigation={props.navigation} />
			<View style={{flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center'}} >
        <PureChart
          style={{borderRadius: '5px', borderWidth: 1}}
          data={sampleData}
          type='line'
          width={'100%'}
          height={200}
          customValueRenderer={(index, point) => {
            if (index % 2 === 0) return null
            return (
              <Text style={{ textAlign: 'center' }}>{point.y}</Text>
            )
          }}
        />
			</View>
		</ScrollView>
	);
}

export default TesteGrafico;