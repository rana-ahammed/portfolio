import SocialMediaIcons from "../components/SocialMediaIcons";

const Footer = () => {
	return (
		<footer className="h-64 bg-red pt-10">
			<div className="w-5/6 mx-auto">
				<SocialMediaIcons />
				<div className="md:flex md:justify-between justify-center text-center">
					<p className="font-playfair font-semibold text-2xl text-yellow">
						RANA AHAMMED
					</p>
					<p className="font-playfair text-md text-yellow">
						{" "}
						©{new Date().getFullYear()} AHAMMED. ALL RIGHTS RESERVED
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
