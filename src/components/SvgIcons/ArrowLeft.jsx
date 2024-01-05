export function ArrowLeft(props) {
	const { fill = "#eeeded" } = props;

	return (
		<svg height="71" viewBox="0 0 71 71" width="71" {...props}>
			<defs>
				<filter filterUnits="userSpaceOnUse" height="71" id="Elipse_1" width="71" x="0" y="0">
					<feOffset dy="3" />
					<feGaussianBlur result="blur" stdDeviation="3" />
					<feFlood floodOpacity="0.161" />
					<feComposite in2="blur" operator="in" />
					<feComposite in="SourceGraphic" />
				</filter>
			</defs>
			<g data-name="Grupo 13002" id="Grupo_13002" transform="translate(9 6)">
				<g filter="url(#Elipse_1)" transform="matrix(1, 0, 0, 1, -9, -6)">
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
					d="M20.505,23.01,13.5,16.005,20.505,9"
					data-name="Icon feather-chevron-left"
					fill="none"
					id="Icon_feather-chevron-left"
					stroke="#333e48"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="3"
					transform="translate(9.602 10.816)"
				/>
			</g>
		</svg>
	);
}
