import React from "react";
import "./Contact.css";
import { Grid } from "@material-ui/core";

function Contact() {
	return (
		<div className="section-style">
			<h1 className="section-head contact-head">
				Contact{" "}
				<span role="img" aria-label="wave emoji">
					👋
				</span>
			</h1>
			<Grid container>
				
				<Grid item xs={12} sm={6}>
					<div className="contact-section">
						<p className="img-text">
						<img
								src="./icons/github.svg"
								width={40}
								height={40}
								alt="github icon"
							/>
							
							<a
								href="https://github.com/abdhatim"
								className="blue-color"
								target="_blank"
								rel="noopener noreferrer"
							>
								@abdhatim
							</a>
							
						</p>
						<p className="img-text">
						<img
								src="./icons/linkedin.svg"
								width={40}
								height={40}
								alt="linkedin icon" 
								
							/>

							<a
								href="https://www.linkedin.com/in/abdhatim/"
								className="blue-color"
								target="_blank"
								rel="noopener noreferrer"
							>
								@abdhatim
							</a>{" "}
							
						</p>
						<p className="img-text">
						<img
								src="./icons/gmail.svg"
								width={40}
								height={40}
								alt="gmail icon"
							/>
							
							<a
								href="mailto:abdulrahmanhatem2@gmail.com"
								className="blue-color"
							>
								abdulrahmanhatem2@gmail.com
							</a>{" "}
						
						</p>
						
					</div>
				</Grid>
			</Grid>
		</div>
	);
}

export default Contact;
