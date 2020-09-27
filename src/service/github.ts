import axios from 'axios';
import cjb from 'customjsonbuilder';
export interface TIssuesData {
	id: string;
	title: string;
}
export interface TIssue {
	id: string;
	title: string;
}
export const getResults = (query: string): Promise<TIssuesData[]> => {
	console.log('=== request results ');
	const data = cjb.build(`{data:{id:uuid,title:title,$times:4}}`);
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(data);
		}, 3000);
	});
};
export const getResultView = (id: string): Promise<TIssue> => {
	console.log('=== request results ');
	const data = cjb.build(`{data:{id:uuid,title:title,body:text}}`);
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(data);
		}, 3000);
	});
};
