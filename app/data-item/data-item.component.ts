import { Component, OnInit } from "@angular/core";

import { ObservableArray } from "tns-core-modules/data/observable-array";
import { DataItem } from "~/data-item/data-item";
import { DataItemService } from "~/data-item/data-item.service";

@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./data-item.component.html",
})
export class DataItemComponent implements OnInit {
    private _dataItems: ObservableArray<DataItem>;

    constructor(private _dataItemService: DataItemService) {
    }

    get dataItems(): ObservableArray<DataItem> {
        return this._dataItems;
    }

    ngOnInit() {
        this._dataItems = new ObservableArray(this._dataItemService.getDataItems());
    }
}