import React, { useEffect, useState } from 'react';
import { Text, View, ScrollView } from 'react-native';
// import { LineChart, Grid } from 'react-native-svg-charts'
import PureChart from 'react-native-pure-chart';
import { Cabecalho } from './Cabecalho';
import moment from "moment";

function displayGraphic(data) {
  let dados = [{ seriesName: 'esperado', data: data, color: 'green' }]
  console.warn(data)
  console.warn(dados)
  if (dados != {}) {
    console.warn('sim')
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
    console.warn('nao')
    return (
      <Text style={{ textAlign: 'center' }}>Não existem dados para imprimir gráfico</Text>
    )
  }
}

const TesteGrafico = (props) => {
  const [data, setData] = useState([]);
  // const [finish, setFinish] = useState(0)
  const [unitEvolution, setUnitEvolution] = useState(0)

  const countFinished = (listaItem) => {
    console.warn('count Finished')
    console.warn(listaItem)
    let count = 0
    listaItem.forEach(function (item) {
      console.warn(item.finished_date)
      console.warn(item['finished_date'])
      if (item.finished_date != null) {
        console.warn('mais um item')
        count = count + 1
        console.warn(count)
      }
    });
    console.warn('contador')
    console.warn(count)

    if (count > 0) {
      buildData(listaItem)
    }
  }

  const calculeEvolution = (listaItem) => {
    console.warn('calcule evolution')
    let listSize = listaItem.length;
    setUnitEvolution(100 / listSize)
    console.warn(listSize)
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

  const buildData = (listaItem) => {
    console.warn('buils data')
    let dadosReais = []
    let unitCount = 0
    listaItem.forEach(function (item) {
      console.log(item)
      dadosReais.push({ x: item['finished_date'], y: Math.round(unitCount) })

      
      // setData([...data, { x: item['finished_date'], y: count }]);

      // setData([...data, { 
      //   x: item['finished_date'], 
      //   y: count 
      // }]);

      unitCount = unitCount + unitEvolution;
      console.warn(unitEvolution)
  })

  setData(dadosReais);
}

useEffect(() => {
  calculeEvolution(props.route.params.lista_item)
  countFinished(props.route.params.lista_item)

  buildData(props.route.params.lista_item)

  console.warn("chamou useEffect")
  console.warn(data)

}, [])

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