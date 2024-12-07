import React from "react";
import { IoMdPerson } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { Draggable } from "@hello-pangea/dnd";
const Custmer = ({ customer }) => {
	return (
		<Draggable draggableId={customer.id} index={0}>
			{(provided, snapshot) => {
				console.log(snapshot);
				return (
					<div
						className={`${
							snapshot.isDragging ? "bg-purple-900" : "bg-blue-950"
						} flex flex-col p-4 rounded-lg gap-6 cursor-pointer shadow-lg border-[0.05rem] border-gray-100/10 `}
						ref={provided.innerRef}
						{...provided.draggableProps}
						{...provided.dragHandleProps}
					>
						<div className="flex gap-4">
							<IoMdPerson />
							<div className="flex flex-col text-sm font-bold ">
								<p>Name</p>
								<p className="text-gray-400">{customer.name}</p>
							</div>
						</div>
						<div className="flex gap-4 ">
							<MdEmail className="text-3xl" />
							<div className="flex flex-col text-sm font-bold">
								<p>Email</p>
								<p className="text-gray-400">{customer.email}</p>
							</div>
						</div>
					</div>
				);
			}}
		</Draggable>
	);
};

export default Custmer;
