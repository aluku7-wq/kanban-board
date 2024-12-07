import React, { useState } from "react";
import Column from "./Column";
import { DragDropContext } from "@hello-pangea/dnd";
const Kanban = () => {
	const boards = [
		{ name: "New", id: "1" },
		{ name: "Underwriting", id: "2" },
		{ name: "Approvals", id: "3" },
		{ name: "Invoiced", id: "4" },
		{ name: "Invoice Paid", id: "5" },
	];
	const [customers, setcustomers] = useState([
		{
			name: "customer one",
			email: "customerone@email.com",
			status: "New",
			id: "1324",
		},
		{
			name: "customer two",
			email: "customertwo@email.com",
			status: "Underwriting",
			id: "5322",
		},
		{
			name: "customer three",
			email: "customerthree@email.com",
			status: "Approvals",
			id: "2323",
		},
		{
			name: "customer four",
			email: "customerfour@email.com",
			status: "Invoiced",
			id: "1535",
		},
		{
			name: "customer five",
			email: "customerfive@email.com",
			status: "Invoice Paid",
			id: "1677",
		},
		{
			name: "customer six",
			email: "customersix@email.com",
			status: "Invoiced",
			id: "1578",
		},
		{
			name: "customer eight",
			email: "customereight@email.com",
			status: "Approvals",
			id: "1877",
		},
		{
			name: "customer nine",
			email: "customernine@email.com",
			status: "Underwriting",
			id: "1099",
		},
	]);

	return (
		<div className="bg-blue-950 min-h-screen text-gray-200 flex flex-col items-center pt-[5%] p-10 gap-8">
			<div className="flex">
				<h1 className="text-5xl font-semibold">Customer Data</h1>
			</div>
			<DragDropContext
				onDragEnd={(e) => {
					// Check if destination is valid
					if (!e.destination) return;
					console.log(e);
					// Only proceed if the column has changed
					if (e.source.droppableId !== e.destination.droppableId) {
						let customersUpdate = customers.map((customer) => {
							// find destination name to change the draggleble to it
							let destinationBoard = boards.find(
								(board) => board.id === e.destination.droppableId
							);
							// modify customer status
							if (customer.id === e?.draggableId) {
								return { ...customer, status: destinationBoard.name };
							}
							return customer;
						});

						setcustomers(customersUpdate);

						// update the database here
					}
				}}
			>
				<div className="flex gap-4 flex-wrap">
					{boards.map((board) => {
						return (
							<Column board={board} key={board.id} customers={customers} />
						);
					})}
				</div>
			</DragDropContext>
		</div>
	);
};

export default Kanban;
