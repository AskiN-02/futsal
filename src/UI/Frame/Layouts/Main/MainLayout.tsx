import type { ReactNode } from 'react';
import Nav from '../../Nav/Nav';
import { Container, ContentBox } from './mainLayout.styles';

type Props = {
	children: ReactNode;
};

function MainLayout({ children }: Props) {
	return (
		<Container>
			<Nav />
			<ContentBox>{children}</ContentBox>
		</Container>
	);
}

export default MainLayout;
