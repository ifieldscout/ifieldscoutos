import { Time } from "@angular/common";

export interface Case {
    0: {   
        attributes: {  
            type: string,
            url: string
        },
        caseid: string,
        Name: number,
        caseno: number,
        cname: string,
        opentime: Date,
        closetime: Date,
        AssignedDate: Date,
        GeoDate__c: Date,
        corigin: number,
        creason: string,
        priority: string,
        userid: string,
        cstatus: string,
        ctype: string,
        slaviolation: boolean,
        cowner: string,
        csubject: string,
        cntctemail: string,
        cntctphone: number,
        cntctfax: number,
        cntctmobile: number,
        cntctId: string,
        description: string,
        fimgstoreURL: string,
        sitelog: string,
        createdAt: Date,
        ClosedDate: Date,
        expctddur: Time,
        createdbyId: string,
        Latitude: number,
        Longitude: number,
        locdist: number,
        ranking: number,
        accid: string,
        updatedAt: Date,
        ServiceEnggName: string,
        ServiceEnggPhone: string
    }
}
