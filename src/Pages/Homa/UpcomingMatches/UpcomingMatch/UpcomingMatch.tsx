import Typography from '../../../../UI/Components/Typography/Typography';
import {
	Container,
	DateTimeBox,
	Img,
	League,
	Team,
	TeamsBox,
} from './UpcomingMatch.styles';
import FCT from '../../../../assets/Logos/midium/FCT.png';
import KSC from '../../../../assets/Logos/midium/KSC.png';
import FOGOIMG from '../../../../assets/Logos/small/fogo.png';

function UpcomingMatch() {
	return (
		<Container>
			<League>
				<Img src={FOGOIMG} style={{ height: '12px', width: '12px' }} />
				<Typography text='Futsal Ekstraklasa' style={{ margin: '3.5px 0' }} />
			</League>
			<TeamsBox>
				<Team>
					<Img src={KSC} />
					<Typography text='KSC' style={{ margin: '3.5px 0' }} />
				</Team>
				<Typography text='vs' />
				<Team>
					<Img src={FCT} />
					<Typography text='FCT' style={{ margin: '3.5px 0' }} />
				</Team>
			</TeamsBox>
			<DateTimeBox>
				<Typography text='02.11 20:00' />
			</DateTimeBox>
		</Container>
	);
}

export default UpcomingMatch;
