import { Container } from './home.styles';
import RecentMatches from './RecentMatches/RecentMatches';
import UpcomingMatches from './UpcomingMatches/UpcomingMatches';

function Home() {
	return (
		<Container>
			<RecentMatches />
			<UpcomingMatches />
		</Container>
	);
}

export default Home;
