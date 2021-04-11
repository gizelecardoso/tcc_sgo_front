import React, { Fragment } from 'react';
import { ScrollView } from 'react-native';
import Cabecalho from "../../Components/Cabecalho/Cabecalho.js";

const BemVindo = (props) => {
	return (
		<ScrollView>
			<Cabecalho navigation={props.navigation} />
		</ScrollView>
	);
}

export default BemVindo;