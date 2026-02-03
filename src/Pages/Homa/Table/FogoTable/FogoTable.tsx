import Typography from '../../../../UI/Components/Typography/Typography';
import { Body, Container, Header } from './FogoTable.styles';
import Team from './Team/Team';

function FogoTable() {
	return (
		<Container>
			<Header>
				<Typography text='#' style={{ width: '20px', textAlign: 'center' }} />
				<Typography text='Drużyna' style={{ width: '100%' }} />
				<Typography
					text='M'
					style={{ minWidth: '28px', textAlign: 'center' }}
				/>
				<Typography
					text='P'
					style={{ minWidth: '28px', textAlign: 'center' }}
				/>
				<Typography
					text='GZ'
					style={{ minWidth: '28px', textAlign: 'center' }}
				/>
				<Typography
					text='GS'
					style={{ minWidth: '28px', textAlign: 'center' }}
				/>
				<Typography
					text='+/-'
					style={{ minWidth: '28px', textAlign: 'center' }}
				/>
			</Header>
			<Body>
				<Team />
				<Team />
				<Team />
				<Team />
				<Team />
				<Team />
				<Team />
				<Team />
				<Team />
				<Team />
				<Team />
				<Team />
				<Team />
				<Team />
				<Team />
				<Team />
			</Body>
		</Container>
	);
}

export default FogoTable;
