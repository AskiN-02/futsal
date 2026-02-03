import Typography from '../../../../UI/Components/Typography/Typography';
import { Container, Name } from './League.styles';
import Fogo from '../../../../assets/backgrounds/fogo.png';
import { Img } from '../../../../UI/Components/GloblaStyles';

function League() {
	return (
		<Container>
			<Img src={Fogo} />
			<Name>
				<Typography variant='h' text='Futsal Ekstraklasa' />
			</Name>
		</Container>
	);
}

export default League;
