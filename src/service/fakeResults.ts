import cjb from 'customjsonbuilder';
export const fakeResults = () => {
	return cjb.build(
		`{data:{id:uuid,title:title,labels:{color:e7e7e7,name:word,$times:2},user:{login:rollrodrig},created_at:2020,$times:4}}`
	);
};
export const fakeResultView = () => {
	return cjb.build(`{data:{id:uuid,title:title,body:text}}`);
};
