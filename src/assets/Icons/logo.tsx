import * as React from "react";

const MonitoLogo = () => (
	<svg
		className="cursor-pointer"
		xmlns="http://www.w3.org/2000/svg"
		width={115}
		height={40}
		fill="none"
	>
		<g fill="#103559" clipPath="url(#a)">
			<path d="M32.569 32.631c.642 0 1.174.218 1.6.647.437.43.648.966.648 1.602 0 .637-.211 1.162-.648 1.602-.426.43-.958.647-1.6.647h-1.384v2.345h-1.116v-6.837h2.5v-.006Zm0 3.437c.658 0 1.132-.498 1.132-1.193 0-.695-.474-1.194-1.132-1.194h-1.384v2.382h1.384v.005ZM36.496 37.516c.161.685.79 1.062 1.641 1.062.585 0 1.024-.19 1.325-.558l.912.47c-.5.656-1.252.984-2.242.984-.83 0-1.508-.225-2.02-.666a2.171 2.171 0 0 1-.768-1.703c0-.685.256-1.233.757-1.683.5-.46 1.157-.685 1.947-.685.746 0 1.364.235 1.842.695.484.46.73 1.027.73 1.683 0 .098-.012.235-.04.406h-4.079l-.005-.005Zm3.005-.792c-.156-.73-.74-1.111-1.464-1.111-.818 0-1.39.425-1.547 1.11h3.01ZM43.784 35.546h-1.21v2.35c0 .629.409.618 1.21.58v.953c-1.614.197-2.267-.245-2.267-1.527v-2.35h-.898V34.53h.898v-1.059l1.057-.313v1.372h1.21v1.021-.005ZM46.387 36.681c.713.152 1.637.441 1.617 1.406 0 .431-.176.774-.517 1.02-.342.244-.769.367-1.286.367-.915 0-1.593-.397-1.89-1.053l.86-.486c.156.432.497.652 1.025.652.527 0 .788-.171.788-.505 0-.288-.386-.46-.879-.578-.693-.171-1.627-.44-1.607-1.39 0-.417.156-.75.482-1 .322-.255.734-.377 1.21-.377.77 0 1.387.352 1.714.94l-.844.46c-.156-.342-.452-.514-.87-.514-.376 0-.672.162-.672.48 0 .3.386.451.869.588v-.01ZM54.335 33.637c-.831-.067-1.236.25-1.236.948v.094h1.236v1h-1.236v3.794h-1.132v-3.795h-.797v-1h.797v-.093c0-1.312.82-2.03 2.368-1.947v1ZM55.633 38.789c-.51-.46-.77-1.018-.77-1.684 0-.665.26-1.223.77-1.683.51-.46 1.14-.685 1.867-.685.727 0 1.357.225 1.867.685.51.46.77 1.018.77 1.683 0 .666-.26 1.224-.77 1.684-.51.46-1.129.685-1.867.685s-1.357-.225-1.867-.685Zm1.867-.26c.44 0 .809-.137 1.107-.406.299-.27.45-.612.45-1.018s-.151-.748-.45-1.018c-.298-.269-.667-.406-1.107-.406-.44 0-.809.137-1.107.406-.299.27-.45.612-.45 1.018s.151.749.45 1.018c.298.27.667.406 1.107.406ZM61.752 35.601c.273-.576.797-.864 1.55-.864v1.087c-.409-.03-.775.065-1.086.278-.311.207-.464.55-.464 1.026v2.346h-1.087v-4.656h1.087v.783ZM71.216 37.52c0 .557-.188 1.024-.567 1.396-.379.372-.839.558-1.385.558h-2.796V32.63h2.589c.53 0 .986.186 1.35.547.374.361.556.812.556 1.348 0 .595-.223 1.057-.663 1.396.567.314.91.882.91 1.593l.006.005Zm-3.676-3.832v1.8h1.517c.475 0 .839-.394.839-.898s-.364-.897-.84-.897H67.54v-.005Zm1.724 4.73c.495 0 .885-.42.885-.956s-.39-.956-.885-.956H67.54v1.916h1.724v-.005ZM73.421 37.516c.161.685.79 1.062 1.64 1.062.584 0 1.023-.19 1.323-.558l.912.47c-.5.656-1.251.984-2.24.984-.829 0-1.507-.225-2.018-.666a2.172 2.172 0 0 1-.767-1.703c0-.685.255-1.233.756-1.683.5-.46 1.156-.685 1.945-.685.745 0 1.362.235 1.846.695.483.46.728 1.027.728 1.683 0 .098-.011.235-.039.406h-4.075l-.01-.005Zm3.002-.792c-.156-.73-.74-1.111-1.462-1.111-.817 0-1.39.425-1.545 1.11h3.013-.006ZM79.62 36.681c.714.152 1.638.441 1.618 1.406 0 .431-.176.774-.517 1.02-.342.244-.769.367-1.286.367-.915 0-1.593-.397-1.89-1.053l.86-.486c.156.432.497.652 1.025.652.527 0 .788-.171.788-.505 0-.288-.386-.46-.879-.578-.693-.171-1.627-.44-1.607-1.39 0-.417.155-.75.482-1 .322-.255.733-.377 1.21-.377.77 0 1.387.352 1.714.94l-.844.46c-.156-.342-.452-.514-.87-.514-.376 0-.673.162-.673.48 0 .3.387.451.87.588v-.01ZM84.931 35.546h-1.209v2.35c0 .629.409.618 1.21.58v.953c-1.612.197-2.265-.245-2.265-1.527v-2.35h-.9V34.53h.9v-1.059l1.055-.313v1.372h1.21v1.021-.005ZM24.989 3.215c-.139-1.362-.685-1.636-1.747-1.636h-4.524c-.993 0-1.232.169-1.61 1.261l-3.392 11.033L10.323 2.84c-.377-1.092-.616-1.26-1.61-1.26H4.185c-1.062 0-1.609.273-1.747 1.635l-2.4 21.659c-.1.78-.032 1.092.653 1.192l5.178.75c.785.1.96-.07 1.062-.65L8.06 16.02l2.432 9.502c.24.781.547 1.093 1.339 1.093h3.77c.786 0 1.099-.306 1.338-1.093l2.4-9.502 1.163 10.146c.1.58.276.75 1.062.65l5.177-.75c.685-.1.754-.406.653-1.192l-2.405-21.66ZM37.454 7.369c-5.81 0-8.968 3.982-8.968 9.473 0 5.492 3.158 9.474 8.968 9.474 5.81 0 8.968-3.982 8.968-9.474 0-5.491-3.158-9.473-8.968-9.473Zm0 12.75c-1.395 0-2.142-1.306-2.142-3.282s.748-3.282 2.142-3.282c1.395 0 2.142 1.306 2.142 3.282s-.747 3.282-2.142 3.282ZM59.452 7.38c-1.191 0-10.103.236-10.683 1.05-.237.274-.237.648-.237 1.29l.274 14.797c.032 1.357.343 1.799 1.529 1.799h4.152c1.191 0 1.529-.442 1.529-1.799V14.3c.51-.169.68-.237 1.26-.274.78-.031 1.153.205 1.396.847.169.678.205 1.699.205 3.087l-.031 6.552c0 1.357.374 1.799 1.565 1.799h4.253c1.191 0 1.497-.442 1.528-1.799l.274-9.03c.032-2.208-.442-4.243-1.565-5.736-1.19-1.494-2.962-2.377-5.444-2.377l-.005.01ZM75.414 9.474h-4.275c-1.17 0-1.506.403-1.506 1.76v13.29c0 1.352.337 1.792 1.506 1.792h4.342c1.17 0 1.537-.44 1.537-1.792l-.067-13.29c0-1.32-.367-1.76-1.537-1.76ZM73.59.526c-2.532 0-3.957 1.56-3.957 3.685s1.425 3.684 3.957 3.684c2.531 0 3.956-1.56 3.956-3.684 0-2.126-1.425-3.685-3.957-3.685ZM91.947 7.92h-2.63V3.344c0-1.355-.348-1.765-1.553-1.765h-4.08c-1.211 0-1.591.441-1.591 1.765V7.92H80.02c-1.14 0-1.42.205-1.42 1.255v3.699c0 1.05.28 1.255 1.42 1.255h2.073v6.44c0 4.34 2.313 6.273 6.673 6.273 1.28 0 2.56-.1 3.77-.341.52-.1.659-.237.659-.746l-.172-5.19c0-.442-.24-.61-.69-.51-.38.1-.76.168-1.28.168-1.002 0-1.73-.341-1.73-1.796v-4.308h2.63c1.14 0 1.418-.205 1.418-1.256V9.165c0-1.05-.278-1.256-1.419-1.256l-.005.01ZM103.395 7.369c-5.81 0-8.968 3.982-8.968 9.473 0 5.492 3.157 9.474 8.968 9.474 5.81 0 8.967-3.982 8.967-9.474 0-5.491-3.157-9.473-8.967-9.473Zm0 12.75c-1.395 0-2.142-1.306-2.142-3.282s.747-3.282 2.142-3.282c1.394 0 2.142 1.306 2.142 3.282s-.748 3.282-2.142 3.282ZM114.03 8.11c-.609-.44-1.608-.185-2.238.567-.631.753-.647 1.72-.042 2.16.609.44 1.608.185 2.238-.567.631-.753.646-1.72.042-2.16ZM99.685 6.831c.717-.11 1.186-1.016 1.048-2.028-.139-1.01-.826-1.744-1.542-1.634-.716.11-1.186 1.016-1.048 2.027.139 1.012.826 1.745 1.542 1.635ZM108.969 7.761c.991.5 2.492-.446 3.346-2.116.854-1.67.745-3.432-.252-3.932-.991-.5-2.492.446-3.346 2.116-.854 1.67-.745 3.432.252 3.932ZM103.837 6.307c.999.127 1.968-1.181 2.161-2.919.193-1.743-.46-3.252-1.464-3.38-.999-.127-1.968 1.182-2.161 2.92-.193 1.742.46 3.252 1.464 3.38Z" />
		</g>
		<defs>
			<clipPath id="a">
				<path fill="#fff" d="M0 0h115v40H0z" />
			</clipPath>
		</defs>
	</svg>
);

export default MonitoLogo;