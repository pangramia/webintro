/**
 * Forest service
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 0.0.4
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

export interface TeaSpot { 
    name: string;
    geo?: string;
    photo?: string;
    /**
     * Tea types that are available to order
     */
    teaTypes?: Array<string>;
}