import React, { Fragment } from 'react';
import Cabecalho from "../../Components/Cabecalho/Cabecalho.js";

const BemVindo = (props) => {
	return (
		<Fragment>
			<Cabecalho navigation={props.navigation} />
		</Fragment>
	);
}

export default BemVindo;