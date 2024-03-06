'use client'
import axios from 'axios';
import ProjectsGrid from '../../components/projects/ProjectsGrid';
import { ProjectTypes } from '@/helpers/types/project';
import { useEffect, useState } from 'react';

function index() {
	const [data,setData] = useState(undefined)

	const fetchData = async ():Promise<ProjectTypes | undefined> => {
		try {
			const res = await axios.get("/data/project.json")
			setData(res.data)
			return res.data
		} catch (error) {
			throw new Error("An unexpected error occurred");
		}
	}

	useEffect(() => {
		fetchData()
	},[])

	return (
		<div className="container mx-auto">

			<ProjectsGrid data={data}/>
		</div>
	);
}

export default index;