import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "../../styles/slides.scss";

const Slides = props => {
	console.log(props);
	return (
		<Carousel fade>
			<Carousel.Item>
				<img className="d-block w-100" src="https://i.ibb.co/WnnKCCn/ilusion3.png" alt="First slide" />
				<Carousel.Caption>
					<img
						src="https://lumiere-a.akamaihd.net/v1/images/the-mandalorian-s2-logo-1200-notext_345f4acf.png?region=0,0,1200,376"
						className="img-fluid"
						width="200"
					/>
					<h3>THE CHILD</h3>
					<p>Review for the episode 3 of The Mandalorian, now available on Disney+.</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img className="d-block w-100" src="https://i.ibb.co/gPg2SyX/ilusion2.png" alt="Second slide" />

				<Carousel.Caption>
					<h3>THE SIN</h3>
					<p>The latest artbook by Rumiko Takahashi THE SIN featuring Darth Vader is out now.</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img className="d-block w-100" src="https://i.ibb.co/jRv4Hb5/ilusion1.png" alt="Third slide" />

				<Carousel.Caption>
					<h3>THE BAD BATCH</h3>
					<p>Find out everything you need to know about the new animated series by Dave Filoni.</p>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	);
};

export default Slides;
