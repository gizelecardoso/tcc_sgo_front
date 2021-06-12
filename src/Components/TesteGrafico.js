import React, { useEffect, useState } from 'react';
import { Text, View, ScrollView } from 'react-native';
// import { LineChart, Grid } from 'react-native-svg-charts'
import PureChart from 'react-native-pure-chart';
import { Cabecalho } from './Cabecalho';
import moment from "moment";

function displayGraphic(data) {
  console.log(data)
  let dados = [{ seriesName: 'esperado', data: data, color: 'green' }]
  //let dados = data
  if (dados != {}) {
    return (
      <PureChart
        style={{ borderRadius: '5px', borderWidth: 1 }}
        data={dados}
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
    )
  } else {
    return (
      <Text style={{ textAlign: 'center' }}>Não existem dados para imprimir gráfico</Text>
    )
  }
}

const TesteGrafico = (props) => {
  const [data, setData] = useState([]);
  const [unitEvolution, setUnitEvolution] = useState(0)

  const countFinished = (listaItem) => {
    let count = 0
    listaItem.forEach(function (item) {
      if (item.finished_date != null) {
        count = count + 1
      }
    });
    if (count > 0) {
      buildData(listaItem)
    }
  }

  const calculeEvolution = (listaItem) => {
    let listSize = listaItem.length;
    setUnitEvolution(100 / listSize)
  }

  const buildData = (listaItem) => {
    console.log(listaItem)
    let dadosReais = []
    let unitCount = 0
    listaItem.forEach(function (item) {
      dadosReais.push({ x: item['finished_date'], y: Math.round(unitCount) })
      unitCount = unitCount + unitEvolution;
  })

  setData(dadosReais);
  console.log(dadosReais)
}

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


useEffect(() => {
  calculeEvolution(props.route.params.lista_item)
  countFinished(props.route.params.lista_item)
  console.log(data);
}, []);

return (
  <ScrollView>
    <Cabecalho navigation={props.navigation} page={'Activities'} />
    <View style={{ flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center' }} >

      {displayGraphic(data)}
      {/* <PureChart
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
        /> */}
    </View>
  </ScrollView>
);
}

export default TesteGrafico;