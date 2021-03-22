import React, { Fragment } from 'react';
import Cabecalho from "../../Components/Cabecalho/Cabecalho.js";

const BemVindo = (props) => {
	return (
		<Fragment>
			<Cabecalho navigation={props.navigation} name={props.route.params.name_official} login={props.route.params.login_name} />
		</Fragment>
	);
}

export default BemVindo;