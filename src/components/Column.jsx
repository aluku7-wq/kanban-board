import React from "react";
import Custmer from "./Custmer";
import { Droppable } from "@hello-pangea/dnd";
const Column = ({ board, customers }) => {
	return (
		<div className="bg-gray-100/10 w-[18rem] p-4 rounded-lg flex flex-col gap-8 h-fit min-[5rem]">
			<div className="flex">
				<h4>{board.name}</h4>
			</div>

			<Droppable droppableId={board.id} type="PERSON">
				{(provided, snapshot) => {
					return (
						<div
							className="flex flex-col gap-4"
							ref={provided.innerRef}
							{...provided.droppableProps}
						>
							{customers.map((customer) => {
								if (customer.status === board.name) {
									return <Custmer customer={customer} />;
								}
								return null;
							})}
						</div>
					);
				}}
			</Droppable>
		</div>
	);
};

export default Column;
