import UWW from '../../../../assets/Logos/small/UWW.png';
import KSC from '../../../../assets/Logos/small/KSC.png';
import Typography from '../../../../UI/Components/Typography/Typography';
import { Img, MatchBox, Result, Team } from './recentMatch.styles';

function RecentMatch() {
	return (
		<MatchBox>
			<Team>
				<Img src={UWW} />
				<Typography variant='nt1' text='UWW' />
			</Team>
			<Result>
				<Typography variant='nt1' text='5-9' />
			</Result>
			<Team>
				<Img src={KSC} />
				<Typography variant='nt1' text='CST' />
			</Team>
		</MatchBox>
	);
}

export default RecentMatch;
