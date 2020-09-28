import axios from 'axios';
import cjb from 'customjsonbuilder';
import { fakeResults, fakeResultView } from './fakeResults';
import { FB_REACT_ISSUES } from '../constants/api';
export interface TIssuesLabes {
	color: string;
	name: string;
}
export interface TIssuesData {
	id: string;
	title: string;
	state: string;
	url: string;
	created_at: string;
	comments: number;
	updated_at: string;
	user: { login: string; id: number; avatar: string };
	labels: TIssuesLabes[];
}
export interface TIssue {
	id: string;
	title: string;
	body: string;
	comments: number;
	comments_url: string;
	created_at: string;
	updated_at: string;
}
export const getResults = (): Promise<TIssuesData[]> => {
	console.log('=== request results ');
	return new Promise((resolve, reject) => {
		axios
			.get(FB_REACT_ISSUES)
			.then((data) => resolve(data.data))
			.catch((err) => reject(err));
		// setTimeout(() => {
		// 	resolve(fakeResults()['data']);
		// }, 3000);
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
