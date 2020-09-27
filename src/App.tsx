import React from 'react';
import { Home } from './pages/home';
import styled from 'styled-components';
import { textColor } from './storage/colors';
const AppStyled = styled.div`
	color: ${textColor};
`;
function App() {
	return (
		<AppStyled>
			<Home />
		</AppStyled>
	);
}
export default App;
