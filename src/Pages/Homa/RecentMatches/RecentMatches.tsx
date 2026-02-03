import Typography from '../../../UI/Components/Typography/Typography';
import RecentMatch from './RecentMatch/RecentMatch';
import { Container, MatchesBox } from './RecentMatches.styles';

function RecentMatches() {
	return (
		<Container>
			<Typography
				variant='h'
				text='Ostatnie mecze'
				style={{ marginBottom: '16px' }}
			/>
			<MatchesBox>
				<RecentMatch />
				<RecentMatch />
				<RecentMatch />
				<RecentMatch />
				<RecentMatch />
				<RecentMatch />
				<RecentMatch />
				<RecentMatch />
				<RecentMatch />
				<RecentMatch />
			</MatchesBox>
		</Container>
	);
}

export default RecentMatches;
