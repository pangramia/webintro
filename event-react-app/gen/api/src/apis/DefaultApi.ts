/* tslint:disable */
/* eslint-disable */
/**
 * Event service
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import {
    ErrorResponse,
    ErrorResponseFromJSON,
    ErrorResponseToJSON,
    Event,
    EventFromJSON,
    EventToJSON,
} from '../models';

export interface EventRequest {
    date: string;
}

export interface EventsRequest {
    date?: string;
}

/**
 * no description
 */
export class DefaultApi extends runtime.BaseAPI {

    /**
     * Returns info on certain date events
     */
    async eventRaw(requestParameters: EventRequest): Promise<runtime.ApiResponse<Array<Event>>> {
        if (requestParameters.date === null || requestParameters.date === undefined) {
            throw new runtime.RequiredError('date','Required parameter requestParameters.date was null or undefined when calling event.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/timetable/{date}`.replace(`{${"date"}}`, encodeURIComponent(String(requestParameters.date))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(EventFromJSON));
    }

    /**
     * Returns info on certain date events
     */
    async event(requestParameters: EventRequest): Promise<Array<Event>> {
        const response = await this.eventRaw(requestParameters);
        return await response.value();
    }

    /**
     * Returns list of city event, starting from a date
     */
    async eventsRaw(requestParameters: EventsRequest): Promise<runtime.ApiResponse<Array<Event>>> {
        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.date !== undefined) {
            queryParameters['date'] = requestParameters.date;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/timetable`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(EventFromJSON));
    }

    /**
     * Returns list of city event, starting from a date
     */
    async events(requestParameters: EventsRequest): Promise<Array<Event>> {
        const response = await this.eventsRaw(requestParameters);
        return await response.value();
    }

}
