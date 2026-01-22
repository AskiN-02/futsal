import { Img, MatchBox, Result, Team } from './recentMatch.styles';
import UWW from '../../../../assets/Logos/small/UWW.png';
import KSC from '../../../../assets/Logos/small/KSC.png';

function RecentMatch() {
	return (
		<MatchBox>
			<Team>
				<Img src={UWW} />
				UWW
			</Team>
			<Result>5-9</Result>
			<Team>
				<Img src={KSC} />
				CST
			</Team>
		</MatchBox>
	);
}

export default RecentMatch;
