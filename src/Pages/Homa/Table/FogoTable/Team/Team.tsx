import Typography from '../../../../../UI/Components/Typography/Typography';
import { Container, Param, Place } from './Team.styles';
import KSC from '../../../../../assets/Logos/large/KSC.png';
import { Img } from '../../../../../UI/Components/GloblaStyles';

function Team() {
	return (
		<Container>
			<Place>
				<Typography text='1.' />
			</Place>
			<Img src={KSC} style={{ margin: '0 8px' }} />
			<Typography text='Constract Lubawa' style={{ width: '100%' }} />
			<Param>
				<Typography text='8' />
			</Param>
			<Param>
				<Typography variant='h' text='21' />
			</Param>
			<Param>
				<Typography text='38' />
			</Param>
			<Param>
				<Typography text='14' />
			</Param>
			<Param>
				<Typography text='24' />
			</Param>
		</Container>
	);
}

export default Team;
