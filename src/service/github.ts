import axios from 'axios';
import cjb from 'customjsonbuilder';
import { fakeResults, fakeResultView } from './fakeResults';
export interface TIssuesData {
	id: string;
	title: string;
}
export interface TIssue {
	id: string;
	title: string;
	body: string;
}
export const getResults = (query: string): Promise<TIssuesData[]> => {
	console.log('=== request results ');
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(fakeResults());
		}, 3000);
	});
};
export const getResultView = (id: string): Promise<TIssue> => {
	console.log('=== request results ');
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(fakeResultView());
		}, 3000);
	});
};
