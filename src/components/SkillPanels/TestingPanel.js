/* eslint-disable react/prop-types */
import React from "react";
import { Grid } from "@material-ui/core";
import SkillImage from "./SkillImage";
import "./Panel.css";

function TestingPanel() {
	return (
		<div style={{ flexGrow: 1 }}>
			<Grid container spacing={2} className="grid-container">
				<Grid item xs={6} sm={4} className="skill-item">
					<SkillImage src="git.svg" name="Git" />
				</Grid>
				<Grid item xs={6} sm={4} className="skill-item">
					<SkillImage src="jira.svg" name="Jira" />
				</Grid>
			</Grid>
		</div>
	);
}

export default TestingPanel;
