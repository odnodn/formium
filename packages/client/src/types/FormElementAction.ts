/**
 * Copyright (c) Formium, Inc. and its affiliates.
 *
 * This source code is licensed under the Business Source License found in the
 * LICENSE file in the root directory of this source tree.
 */
/**
 *
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 *
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import { FormElementActionDetails } from './FormElementActionDetails';
/* eslint-disable @typescript-eslint/consistent-type-assertions */
export interface FormElementAction {
  /**
   * Action type
   */
  action: FormElementActionAction;

  /**
   * Reference to the field that triggers the the Logic
   */
  details: FormElementActionDetails;

  /**
   * Reference to the field that triggers the the Logic
   */
  condition: { [key: string]: any };
}

export enum FormElementActionAction {
  JUMP = <any>'JUMP',
  SHOW = <any>'SHOW',
  HIDE = <any>'HIDE',
}