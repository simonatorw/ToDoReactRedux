import React from 'react';

export default function ToDoTpl({ add, remove, list }) {
	return (
		<div>
			<section>
				<input type="text" className="textbox" 
					placeholder="Enter an item" 
					onKeyUp={ add } />
			</section>
			<section>
				<ul>
					{
						list.map((item, i) => {
							return (
								<li className="item" 
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