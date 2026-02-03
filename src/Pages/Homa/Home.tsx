import Table from './Table/Table';
import Leagues from './Leagues/Leagues';
import { Container } from './home.styles';
import RecentMatches from './RecentMatches/RecentMatches';
import UpcomingMatches from './UpcomingMatches/UpcomingMatches';

function Home() {
	return (
		<Container>
			<RecentMatches />
			<div style={{ display: 'flex' }}>
				<UpcomingMatches />
				<Table />
				<Leagues />
			</div>
		</Container>
	);
}

export default Home;
