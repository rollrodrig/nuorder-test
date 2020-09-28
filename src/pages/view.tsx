import React, { FC } from 'react';
import { Layout } from './layout';
export interface ViewProps {}
export const View: FC<ViewProps> = () => {
	return (
		<Layout>
			The idea wass put here the issue detail with comments but i ran out
			of time
		</Layout>
	);
};
