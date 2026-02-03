import Typography from '../../../UI/Components/Typography/Typography';
import League from './League/League';
import { Container } from './Leagues.styles';

function Leagues() {
	return (
		<Container>
			<Typography variant='h' text='Rozgrywki' />
			<League />
			<League />
			<League />
		</Container>
	);
}

export default Leagues;
