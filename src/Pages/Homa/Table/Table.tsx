import Typography from '../../../UI/Components/Typography/Typography';
import FogoTable from './FogoTable/FogoTable';
import { Container } from './Table.styles';

function Table() {
	return (
		<Container>
			<Typography variant='h' text='Tabela - Futsal Ekstraklasa' />
			<FogoTable />
		</Container>
	);
}

export default Table;
