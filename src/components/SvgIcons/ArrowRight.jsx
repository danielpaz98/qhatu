export function ArrowRight(props) {
	const { fill = "#eeeded" } = props;

	return (
		<svg height="71" viewBox="0 0 71 71" width="71" {...props}>
			<defs>
				<filter filterUnits="userSpaceOnUse" height="71" id="Elipse_1" width="71" x="0" y="0">
					<feOffset dy="3" input="SourceAlpha" />
					<feGaussianBlur result="blur" stdDeviation="3" />
					<feFlood floodOpacity="0.161" />
					<feComposite in2="blur" operator="in" />
					<feComposite in="SourceGraphic" />
				</filter>
			</defs>
			<g data-name="Grupo 13003" id="Grupo_13003" transform="translate(9 6.432)">
				<g filter="url(#Elipse_1)" transform="matrix(1, 0, 0, 1, -9, -6.43)">
					<circle
						cx="26.5"
						cy="26.5"
						data-name="Elipse 1"
						fill={fill}
						id="Elipse_1-2"
						r="26.5"
						transform="translate(9 6)"
					/>
				</g>
				<path
					d="M13.5,23.01l7.005-7.005L13.5,9"
					data-name="Icon feather-chevron-left"
					fill="none"
					id="Icon_feather-chevron-left"
					stroke="#333e48"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="3"
					transform="translate(9.393 10.385)"
				/>
			</g>
		</svg>
	);
}
