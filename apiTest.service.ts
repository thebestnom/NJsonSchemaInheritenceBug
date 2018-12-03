﻿/* tslint:disable */
//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v12.0.4.0 (NJsonSchema v9.12.7.0 (Newtonsoft.Json v11.0.0.0)) (http://NSwag.org)
// </auto-generated>
//----------------------
// ReSharper disable InconsistentNaming

import { mergeMap as _observableMergeMap, catchError as _observableCatch } from 'rxjs/operators';
import { Observable, throwError as _observableThrow, of as _observableOf } from 'rxjs';
import { Injectable, Inject, Optional, InjectionToken } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpResponseBase } from '@angular/common/http';

export const API_BASE_URL = new InjectionToken<string>('API_BASE_URL');

export interface IValuesClient {
    get(): Observable<string[] | null>;
    index(randomInheritenceOfDad: Dad): Observable<string | null>;
}

@Injectable()
export class ValuesClient implements IValuesClient {
    private http: HttpClient;
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(@Inject(HttpClient) http: HttpClient, @Optional() @Inject(API_BASE_URL) baseUrl?: string) {
        this.http = http;
        this.baseUrl = baseUrl ? baseUrl : "http://localhost:5000";
    }

    get(): Observable<string[] | null> {
        let url_ = this.baseUrl + "/api/Values";
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Accept": "application/json"
            })
        };

        return this.http.request("get", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processGet(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processGet(<any>response_);
                } catch (e) {
                    return <Observable<string[] | null>><any>_observableThrow(e);
                }
            } else
                return <Observable<string[] | null>><any>_observableThrow(response_);
        }));
    }

    protected processGet(response: HttpResponseBase): Observable<string[] | null> {
        const status = response.status;
        const responseBlob = 
            response instanceof HttpResponse ? response.body : 
            (<any>response).error instanceof Blob ? (<any>response).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }};
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            if (resultData200 && resultData200.constructor === Array) {
                result200 = [];
                for (let item of resultData200)
                    result200.push(item);
            }
            return _observableOf(result200);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf<string[] | null>(<any>null);
    }

    index(randomInheritenceOfDad: Dad): Observable<string | null> {
        let url_ = this.baseUrl + "/api/Values";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(randomInheritenceOfDad);

        let options_ : any = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Content-Type": "application/json", 
                "Accept": "application/json"
            })
        };

        return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processIndex(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processIndex(<any>response_);
                } catch (e) {
                    return <Observable<string | null>><any>_observableThrow(e);
                }
            } else
                return <Observable<string | null>><any>_observableThrow(response_);
        }));
    }

    protected processIndex(response: HttpResponseBase): Observable<string | null> {
        const status = response.status;
        const responseBlob = 
            response instanceof HttpResponse ? response.body : 
            (<any>response).error instanceof Blob ? (<any>response).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }};
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 !== undefined ? resultData200 : <any>null;
            return _observableOf(result200);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf<string | null>(<any>null);
    }
}

export abstract class Dad implements IDad {
    dadProp?: number;
    dadRandomClassDto?: RandomClass | undefined;

    protected _discriminator: string;

    constructor(data?: IDad) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
            this.dadRandomClassDto = data.dadRandomClassDto && !(<any>data.dadRandomClassDto).toJSON ? new RandomClass(data.dadRandomClassDto) : <RandomClass>this.dadRandomClassDto; 
        }
        this._discriminator = "Dad";
    }

    init(data?: any) {
        if (data) {
            this.dadProp = data["dadProp"];
            this.dadRandomClassDto = data["dadRandomClassDto"] ? RandomClass.fromJS(data["dadRandomClassDto"]) : <any>undefined;
        }
    }

    static fromJS(data: any): Dad {
        data = typeof data === 'object' ? data : {};
        throw new Error("The abstract class 'Dad' cannot be instantiated.");
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["discriminator"] = this._discriminator; 
        data["dadProp"] = this.dadProp;
        data["dadRandomClassDto"] = this.dadRandomClassDto ? this.dadRandomClassDto.toJSON() : <any>undefined;
        return data; 
    }
}

export interface IDad {
    dadProp?: number;
    dadRandomClassDto?: IRandomClass | undefined;
}

export class RandomClass implements IRandomClass {
    randomProp?: number;

    constructor(data?: IRandomClass) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.randomProp = data["randomProp"];
        }
    }

    static fromJS(data: any): RandomClass {
        data = typeof data === 'object' ? data : {};
        let result = new RandomClass();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["randomProp"] = this.randomProp;
        return data; 
    }
}

export interface IRandomClass {
    randomProp?: number;
}

export class SwaggerException extends Error {
    message: string;
    status: number; 
    response: string; 
    headers: { [key: string]: any; };
    result: any; 

    constructor(message: string, status: number, response: string, headers: { [key: string]: any; }, result: any) {
        super();

        this.message = message;
        this.status = status;
        this.response = response;
        this.headers = headers;
        this.result = result;
    }

    protected isSwaggerException = true;

    static isSwaggerException(obj: any): obj is SwaggerException {
        return obj.isSwaggerException === true;
    }
}

function throwException(message: string, status: number, response: string, headers: { [key: string]: any; }, result?: any): Observable<any> {
    if(result !== null && result !== undefined)
        return _observableThrow(result);
    else
        return _observableThrow(new SwaggerException(message, status, response, headers, null));
}

function blobToText(blob: any): Observable<string> {
    return new Observable<string>((observer: any) => {
        if (!blob) {
            observer.next("");
            observer.complete();
        } else {
            let reader = new FileReader(); 
            reader.onload = event => { 
                observer.next((<any>event.target).result);
                observer.complete();
            };
            reader.readAsText(blob); 
        }
    });
}