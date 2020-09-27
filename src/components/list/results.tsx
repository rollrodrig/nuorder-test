import React, { FC, useState, useEffect, useRef } from 'react';
import { Row } from './row';
import { TIssuesData } from '../../service/github';
import { Message } from '../messages/message';
import { MessageType } from '../messages/message-icon';
const hasResults = (results: TIssuesData[]): boolean => {
	return results.length > 0;
};
export const calcNextIndex = (key: number, current: number, max: number) => {
	if (max <= 0) return 0;
	let next = current;
	if (key === 38) {
		next = next - 1;
		if (next < 0) next = max;
	} else if (key === 40) {
		next = next + 1;
		if (next > max) next = 0;
	}
	return next;
};
export const isArrowKey = (keyCode: number): boolean => {
	return keyCode === 38 || keyCode === 40;
};
export interface ResultsProps {
	results: TIssuesData[];
}
export const Results: FC<ResultsProps> = ({ results = [] }) => {
	const [selectedIndex, setSelectedIndex] = useState<number>(-1);
	const currentIndex = useRef<number>(-1);
	useEffect(() => {
		const keyListener = (event: any) => {
			if (isArrowKey(event.keyCode)) {
				currentIndex.current = calcNextIndex(
					event.keyCode,
					currentIndex.current,
					results.length - 1
				);
				setSelectedIndex(currentIndex.current);
			}
		};
		document.addEventListener('keyup', keyListener);
		return () => {
			document.removeEventListener('keyup', keyListener);
		};
	}, [results]);
	return (
		<div>
			{hasResults(results) ? (
				results.map((result: TIssuesData, index: number) => (
					<Row
						selected={selectedIndex === index ? true : false}
						key={result.id}
						id={result.id}
						title={result.title}
						labels={result.labels}
					/>
				))
			) : (
				<Message type={MessageType.warning}>
					Type something in the search box
				</Message>
			)}
		</div>
	);
};
