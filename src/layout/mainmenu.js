import { ParseYaml } from 'cuttlebelle/dist/parse.js';
import AUlinkList from '../_uikit/layout/link-list';
import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import Path from 'path';
import Fs from 'fs';


/**
 * The Navigation component
 *
 * @disable-docs
 */
const Navigation = ({ _relativeURL, _ID, _pages }) => {
	// let’s get our main menu yaml file
	const menuPath = Path.normalize(`${ __dirname }/../../content/_shared/mainmenu.yml`);
	const menu = ParseYaml( Fs.readFileSync( menuPath, `utf8` ) );

	const CreateLink = ( link ) => {

		const linkClasses = `${ link.text == 'Github' ? ' icon icon--dark icon--github--action' : '' }` +
			`${ link.text == 'Download' ? ' icon icon--dark icon--download--action' : '' }`;

		return _pages[ _ID ]._url === link.link ||
			_pages[ _ID ]._url.startsWith( link.link ) && _pages[ _ID ]._url.split('/').length > link.link.split('/').length
			? {
					text: link.text,
					link: link.link,
					className: `mainmenu--active` + linkClasses
				}
			: {
					text: link.text,
					link: _relativeURL( link.link, _ID ),
					className: linkClasses
				}
	};

	const linksLeft = menu.links.left.map( link => CreateLink( link ) );
	const linksRight = menu.links.right.map( link => CreateLink( link, true ) );

	return (
		<nav id="mainmenu" className="mainmenu au-accordion__body au-accordion--closed au-body au-body--dark" aria-hidden="true" >
			<div className="container-fluid">
				<AUlinkList items={ linksLeft } inline />
				<AUlinkList inline className="mainmenu--right" items={ linksRight } inline />
			</div>
		</nav>
	);
};

Navigation.propTypes = {
	_relativeURL: PropTypes.func.isRequired,
	_ID: PropTypes.string.isRequired,
	_pages: PropTypes.object.isRequired,
};

Navigation.defaultProps = {};

export default Navigation;
