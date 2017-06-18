import React from 'react';

import './ToDo.less';

export default function ToDoTpl({ add, remove, list, bgColor }) {
	return (
		<div className="item" style={{ backgroundColor: bgColor }}>
			<section>
				<input type="text" className="textbox" 
					placeholder="Enter an item" 
					onKeyUp={ add } />
			</section>
			<section className="list">
				<ul>
					{
						list.map((item, i) => {
							return (
								<li className="listItem" 
									onDoubleClick={ remove.bind(this, i) }
									key={item + '_' + i}>{ item }</li>
							);
						})
					}
				</ul>
			</section>
		</div>
	);
}