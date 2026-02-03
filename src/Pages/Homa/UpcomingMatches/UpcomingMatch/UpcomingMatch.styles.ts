import styled from 'styled-components';

export const Container = styled.div`
	padding: 10px;
	width: 310px;
	height: 193px;
	background-color: #fff;
	border-radius: 10px;
`;

export const TeamsBox = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 8px 0;
	padding: 0 47.5px;
	width: 100%;
`;

export const Team = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 10px;
`;

export const DateTimeBox = styled.div`
	padding: 10px;
	text-align: center;
`;

export const Img = styled.img`
	user-select: none;
`;

export const League = styled.div`
	display: flex;
	align-items: center;
	gap: 4px;
`;
