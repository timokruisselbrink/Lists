import { ListTypeBase } from "app/shared/domain/list-types/list-type-base";

export class Checklist extends ListTypeBase {
    constructor() {
        super();
        this.items = new Array();
    }
    public items: Array<ChecklistItem>;
}

export class ChecklistItem {
    constructor() { }
    public text:string;
    public checked:boolean;
}