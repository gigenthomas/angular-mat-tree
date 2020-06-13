import { FileSystemObjectTypes } from "../constants/file-system-object.enums";

export class TreeNode {
    name: string ;
    cid:  string ;
    permission: string ;
    children : Array<TreeNode> ;
    type: FileSystemObjectTypes;

    constructor(input : TreeNodeJson){
        this.name = input.name ;
        this.cid = input.cid ;
        this.permission = input.permission ;
        if ( input.fileFolderType === '1'){
            this.type = FileSystemObjectTypes.Folder ;
        }
        else if  ( input.fileFolderType === '2'){
            this.type = FileSystemObjectTypes.File ;
        }
        this.children = input.fileFolderList ? input.fileFolderList.map( item => new TreeNode(item)):[] ;
    }

    isRoot(){
        if (this.children ==null)
        return true ;
      return false ;
    }

}
