import classes from "./FooterNewsletter.module.css"
import userIcon from "@/assets/icons/user-white.svg"
import arrowIcon from "@/assets/icons/arrow-right-white.svg"
import Image from "next/image"

export default function FooterNewsletter() {
	return (
		<>
			<p>Sign up for News and updates</p>
			<label
				htmlFor="newsletter"
				className={classes["input-con"]}
			>
				<input
					type="email"
					name="newsletter"
					id="newsletter"
					placeholder="E-mail Address"
					className={classes.input}
				/>
				<span className={classes.person}>
					<Image
						src={userIcon}
						alt={"user icon"}
					/>
				</span>
				<span className={classes.arrow}>
					<Image
						src={arrowIcon}
						alt={"arrow right icon"}
					/>
				</span>
			</label>
			<div className={classes.socials}>
				<a
					href="https://facebook.com"
					target="_blank"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						x="0px"
						y="0px"
						width="32"
						height="32"
						viewBox="0 0 48 48"
						className={classes.facebook}
					>
						<path
							fill="#039be5"
							d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"
						></path>
						<path
							fill="#fff"
							d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"
						></path>
					</svg>
				</a>
				<a
					href="https://x.com"
					target="_blank"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						className={classes.twitter}
					>
						<path
							fill="#1DA1F2"
							d="M9.42 19.167c6.042 0 9.345-5.131 9.345-9.578 0-.147 0-.293-.007-.433A6.824 6.824 0 0 0 20.4 7.411a6.54 6.54 0 0 1-1.887.53 3.351 3.351 0 0 0 1.444-1.863 6.554 6.554 0 0 1-2.084.816 3.232 3.232 0 0 0-2.398-1.06c-1.811 0-3.283 1.507-3.283 3.364 0 .265.027.524.089.768-2.732-.14-5.15-1.48-6.77-3.518a3.441 3.441 0 0 0-.443 1.689c0 1.166.578 2.199 1.464 2.8a3.167 3.167 0 0 1-1.485-.42v.042c0 1.634 1.13 2.988 2.636 3.302a3.2 3.2 0 0 1-1.485.056c.416 1.34 1.628 2.31 3.065 2.339A6.501 6.501 0 0 1 4.4 17.645a8.992 8.992 0 0 0 5.02 1.522"
						></path>
					</svg>
				</a>
				<a
					href="https://instagram.com"
					target="_blank"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						className={classes.instagram}
					>
						<defs>
							<radialGradient
								id="e0e4c7a"
								cx="26.069%"
								cy="99.953%"
								r="148.379%"
								fx="26.069%"
								fy="99.953%"
								gradientTransform="scale(.9998 1) rotate(-14.161 .26 1)"
							>
								<stop
									offset="0%"
									stopColor="#FED576"
								></stop>
								<stop
									offset="27.394%"
									stopColor="#F47133"
								></stop>
								<stop
									offset="72.635%"
									stopColor="#BC3081"
								></stop>
								<stop
									offset="100%"
									stopColor="#A236B9"
								></stop>
							</radialGradient>
							<linearGradient
								id="e0e4c7b"
								x1="28.141%"
								x2="37.781%"
								y1="1.707%"
								y2="26.556%"
							>
								<stop
									offset="0%"
									stopColor="#4B67D4"
								></stop>
								<stop
									offset="100%"
									stopColor="#4B67D4"
									stopOpacity="0"
								></stop>
							</linearGradient>
							<radialGradient
								id="e0e4c7c"
								cx="24.067%"
								cy="114.927%"
								r="127.461%"
								fx="24.067%"
								fy="114.927%"
							>
								<stop
									offset="0%"
									stopColor="#FED576"
								></stop>
								<stop
									offset="31.02%"
									stopColor="#F47133"
								></stop>
								<stop
									offset="68.037%"
									stopColor="#DA2E7D"
								></stop>
								<stop
									offset="100%"
									stopColor="#BC3081"
								></stop>
							</radialGradient>
						</defs>
						<g
							fill="none"
							transform="translate(3 3)"
						>
							<path
								fill="url(#e0e4c7a)"
								d="M3.107.482a4.404 4.404 0 0 0-1.592 1.037c-.5.496-.807 1-1.037 1.588-.222.57-.372 1.223-.416 2.18C.018 6.243.007 6.55.007 8.989s.011 2.746.055 3.702c.044.957.197 1.61.416 2.18.23.591.537 1.092 1.037 1.592.5.5 1 .807 1.592 1.037.57.223 1.223.372 2.18.416.956.044 1.263.055 3.702.055s2.746-.011 3.702-.055c.957-.044 1.61-.197 2.18-.416a4.404 4.404 0 0 0 1.592-1.037c.5-.5.807-1 1.037-1.592.223-.57.372-1.223.416-2.18.044-.956.055-1.263.055-3.702s-.011-2.746-.055-3.702c-.044-.957-.197-1.61-.416-2.18a4.429 4.429 0 0 0-1.033-1.588c-.5-.5-1-.807-1.592-1.037-.57-.223-1.223-.372-2.18-.416C11.738.022 11.432.01 8.993.01c-2.44 0-2.746.01-3.703.055-.96.04-1.613.193-2.183.416zm9.511 1.198c.877.04 1.351.186 1.669.31.42.164.72.358 1.033.672.314.314.508.613.672 1.033.124.318.27.792.31 1.668.044.946.051 1.23.051 3.63 0 2.398-.01 2.683-.05 3.629-.04.876-.187 1.35-.311 1.668-.164.42-.358.72-.672 1.034a2.798 2.798 0 0 1-1.033.672c-.318.124-.792.27-1.669.31-.945.044-1.23.051-3.629.051s-2.684-.011-3.63-.051c-.875-.04-1.35-.186-1.668-.31a2.798 2.798 0 0 1-1.033-.672 2.798 2.798 0 0 1-.672-1.034c-.124-.317-.27-.792-.31-1.668-.044-.946-.051-1.23-.051-3.63 0-2.398.01-2.683.05-3.629.041-.876.187-1.35.311-1.668.165-.42.358-.72.672-1.033a2.798 2.798 0 0 1 1.033-.672c.318-.124.793-.27 1.669-.31.945-.044 1.23-.052 3.629-.052s2.684.008 3.63.052z"
							></path>
							<path
								fill="url(#e0e4c7b)"
								d="M3.107.482a4.404 4.404 0 0 0-1.592 1.037c-.5.496-.807 1-1.037 1.588-.222.57-.372 1.223-.416 2.18C.018 6.243.007 6.55.007 8.989s.011 2.746.055 3.702c.044.957.197 1.61.416 2.18.23.591.537 1.092 1.037 1.592.5.5 1 .807 1.592 1.037.57.223 1.223.372 2.18.416.956.044 1.263.055 3.702.055s2.746-.011 3.702-.055c.957-.044 1.61-.197 2.18-.416a4.404 4.404 0 0 0 1.592-1.037c.5-.5.807-1 1.037-1.592.223-.57.372-1.223.416-2.18.044-.956.055-1.263.055-3.702s-.011-2.746-.055-3.702c-.044-.957-.197-1.61-.416-2.18a4.429 4.429 0 0 0-1.033-1.588c-.5-.5-1-.807-1.592-1.037-.57-.223-1.223-.372-2.18-.416C11.738.022 11.432.01 8.993.01c-2.44 0-2.746.01-3.703.055-.96.04-1.613.193-2.183.416zm9.511 1.198c.877.04 1.351.186 1.669.31.42.164.72.358 1.033.672.314.314.508.613.672 1.033.124.318.27.792.31 1.668.044.946.051 1.23.051 3.63 0 2.398-.01 2.683-.05 3.629-.04.876-.187 1.35-.311 1.668-.164.42-.358.72-.672 1.034a2.798 2.798 0 0 1-1.033.672c-.318.124-.792.27-1.669.31-.945.044-1.23.051-3.629.051s-2.684-.011-3.63-.051c-.875-.04-1.35-.186-1.668-.31a2.798 2.798 0 0 1-1.033-.672 2.798 2.798 0 0 1-.672-1.034c-.124-.317-.27-.792-.31-1.668-.044-.946-.051-1.23-.051-3.63 0-2.398.01-2.683.05-3.629.041-.876.187-1.35.311-1.668.165-.42.358-.72.672-1.033a2.798 2.798 0 0 1 1.033-.672c.318-.124.793-.27 1.669-.31.945-.044 1.23-.052 3.629-.052s2.684.008 3.63.052z"
							></path>
							<path
								fill="url(#e0e4c7c)"
								d="M4.378 8.993a4.612 4.612 0 1 0 9.223 0 4.612 4.612 0 0 0-9.223 0zm7.605 0a2.993 2.993 0 1 1-5.987 0 2.993 2.993 0 0 1 5.987 0z"
							></path>
							<circle
								cx="13.787"
								cy="4.199"
								r="1.077"
								fill="#BF309E"
							></circle>
						</g>
					</svg>
				</a>
				<a
					href="https://youtube.com"
					target="_blank"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						className={classes.yt}
					>
						<path
							fill="red"
							fillRule="evenodd"
							d="M12.27 6c1.138.006 5.543.047 6.762.358.775.197 1.385.778 1.592 1.516C21 9.21 21 12 21 12s0 2.79-.376 4.126c-.207.738-.817 1.319-1.592 1.516C17.63 18 12 18 12 18s-5.629 0-7.032-.358c-.775-.197-1.385-.778-1.592-1.516-.336-1.194-.372-3.545-.376-4.035v-.182c.004-.49.04-2.842.376-4.035.207-.738.817-1.319 1.592-1.516 1.219-.31 5.624-.352 6.762-.357zM9.75 9.274v5.454L14.25 12l-4.5-2.727z"
						></path>
					</svg>
				</a>
			</div>
		</>
	)
}
