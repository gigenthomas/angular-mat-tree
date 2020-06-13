export interface TreeNodeJson {
	name: string;
	cid: string ;
	permission:string ;
	fileFolderList?: TreeNodeJson[];
	fileFolderType :string ;
}