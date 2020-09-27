import React, { FC } from 'react';
import { Layout } from './layout';
export interface ViewProps {}
export const View: FC<ViewProps> = () => {
	return <Layout>view page</Layout>;
};
