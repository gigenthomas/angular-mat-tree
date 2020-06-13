import { FileSystemObjectTypes } from "./file-system-object.enum";
import { TreeNodeJson} from "./tree-node-json.model"
export class TreeNodeBak {
    name: string ;
    cid:  string ;
    permission: string ;
    children : Array<TreeNodeBak> ;
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
        this.children = input.fileFolderList ? input.fileFolderList.map( item => new TreeNodeBak(item)):[] ;
    }

    isRoot(){
        if (this.children ==null)
        return true ;
      return false ;
    }

}
