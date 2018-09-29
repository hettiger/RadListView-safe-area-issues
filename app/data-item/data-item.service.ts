import { Injectable } from "@angular/core";
import { DataItem } from "~/data-item/data-item";

@Injectable()
export class DataItemService {

    getDataItems(): DataItem[] {
        return [
            {
                name: "Lorem",
                description: "Ipsum"
            },
            {
                name: "Dolor",
                description: "Sit"
            },
            {
                name: "Amet",
                description: "Consetetur"
            },
            {
                name: "Sadipscing",
                description: "Elitr"
            },
            {
                name: "Diam",
                description: "Nonumy"
            },
            {
                name: "Eirmod",
                description: "Tempor"
            },
            {
                name: "Invidunt",
                description: "Ut"
            },
            {
                name: "Labore",
                description: "Et"
            },
        ];
    }
}