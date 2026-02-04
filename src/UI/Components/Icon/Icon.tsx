import type { IconType } from './Icon.types';

export function Icon({
	size,
	src: IconComponent,
	color = 'white',
	onClick,
	style,
}: IconType) {
	return (
		<IconComponent
			width={size}
			height={size}
			color={color}
			onClick={onClick}
			style={style}
		/>
	);
}
