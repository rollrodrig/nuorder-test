import cjb from 'customjsonbuilder';
export const fakeResults = () => {
	return cjb.build(`{data:{id:uuid,title:title,$times:4}}`);
};
export const fakeResultView = () => {
	return cjb.build(`{data:{id:uuid,title:title,body:text}}`);
};
