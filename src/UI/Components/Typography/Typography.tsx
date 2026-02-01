import styled, { type CSSProperties } from 'styled-components';

type Props = {
	text: string;
	variant?: 'h' | 'nt1' | 'nt2' | 'nt1b';
	style?: CSSProperties;
};

// Figma keys
const variants = {
	h: {
		fontWeight: 600,
		fontStyle: 'SemiBold',
		fontSize: '16px',
		lineHeight: '100%',
		letterSpacing: '-0.32px',
	},
	nt1: {
		fontWeight: 400,
		fontStyle: 'Regular',
		fontSize: '14px',
		lineHeight: '100%',
		letterSpacing: '-0.32px',
	},
	nt2: { fontSize: '32px', fontWeight: 600 },
	nt1b: {
		fontWeight: 600,
		fontStyle: 'SemiBold',
		fontSize: '14px',
		lineHeight: '100%',
		letterSpacing: '-0.32px',
	},
};

function Typography({ text, variant = 'nt1', style }: Props) {
	return (
		<Text
			style={{
				fontSize: variants[variant].fontSize,
				fontWeight: variants[variant].fontWeight,
				...style,
			}}>
			{text}
		</Text>
	);
}

export default Typography;

const Text = styled.p`
	margin: 0;
`;
