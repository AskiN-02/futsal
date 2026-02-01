import Typography from '../../../UI/Components/Typography/Typography';
import UpcomingMatch from './UpcomingMatch/UpcomingMatch';
import { Container } from './UpcomingMatches.styles';

function UpcomingMatches() {
	return (
		<Container>
			<Typography
				variant='h'
				text='Najbliższe mecze'
				style={{ marginBottom: '10px' }}
			/>
			<UpcomingMatch />
		</Container>
	);
}

export default UpcomingMatches;
