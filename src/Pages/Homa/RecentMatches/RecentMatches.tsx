import 'react-indiana-drag-scroll/dist/style.css';
import { ScrollContainer } from 'react-indiana-drag-scroll';
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
			<ScrollContainer>
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
					<RecentMatch />
					<RecentMatch />
					<RecentMatch />
					<RecentMatch />
				</MatchesBox>
			</ScrollContainer>
		</Container>
	);
}

export default RecentMatches;
