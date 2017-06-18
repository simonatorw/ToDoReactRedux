import { connect } from 'react-redux';

import { setContentBgColor } from '../../store/actions/action-creators';
import NavTpl from './NavTpl';

function mapDispatchToProps(dispatch, ownProps) {
	
	return {
		setBgColor: function(e) {
			if (e.target.className === 'menuItem') {
				let color = e.target.href.split('/')[3];
				if (!color) {
					color = 'green';
				}
				//console.log(color);
				dispatch(setContentBgColor(color));
			}
		}
	}
}

export default connect(null, mapDispatchToProps)(NavTpl);