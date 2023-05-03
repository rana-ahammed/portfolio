const SocialMediaIcons = () => {
	return (
		<div className="flex justify-center md:justify-start my-10 gap-7">
			<a
				className="hover:opacity-50 transition duration-500"
				href="https://www.linkedin.com/in/rana-ahammed"
				target="_blank"
				rel="noreferrer"
			>
				<img src="../assets/linkedin.png" alt="linkedin-link" />
			</a>
			<a
				className="hover:opacity-50 transition duration-500"
				href="https://www.twitter.com"
				target="_blank"
				rel="noreferrer"
			>
				<img src="../assets/twitter.png" alt="twitter-link" />
			</a>
			<a
				className="hover:opacity-50 transition duration-500"
				href="https://www.facebook.com/rana-6220"
				target="_blank"
				rel="noreferrer"
			>
				<img src="../assets/facebook.png" alt="facebook-link" />
			</a>
			<a
				className="hover:opacity-50 transition duration-500"
				href="https://www.instagram.com"
				target="_blank"
				rel="noreferrer"
			>
				<img src="../assets/instagram.png" alt="instagram-link" />
			</a>
		</div>
	);
};

export default SocialMediaIcons;
