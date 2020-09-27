import axios from 'axios';
import cjb from 'customjsonbuilder';
export const getResults = (query: string) => {
	console.log('=== request results ');
	const data = cjb.build(`{data:{id:uuid,title:title,$times:4}}`);
	return new Promise((resolve) => {
		resolve(data);
	});
};
export const getResultView = (id: string) => {
	console.log('=== request results ');
	const data = cjb.build(`{data:{id:uuid,title:title,body:text}}`);
	return new Promise((resolve) => {
		resolve(data);
	});
};
