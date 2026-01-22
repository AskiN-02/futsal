import type { ReactNode } from 'react';
import { ContentBox } from './mainLayout.styles';
import Nav from '../../Nav/Nav';

type Props = {
	children: ReactNode;
};

function MainLayout({ children }: Props) {
	return (
		<>
			<Nav />
			<ContentBox>{children}</ContentBox>
		</>
	);
}

export default MainLayout;
