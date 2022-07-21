/** @odoo-module **/

import { _lt } from "@web/core/l10n/translation";
import { Domain } from "@web/core/domain";
import { localization } from "@web/core/l10n/localization";

export const DEFAULT_OPERATOR = "="


//-------------------------------------------------------------------------
// Functions
//-------------------------------------------------------------------------

/**
 * Constructs the string representation of a domain and its description. The
 * domain is of the form:
 *      ['|', d_1 ,..., '|', d_n]
 * where d_i is a Selection field value of the form
 *      [[selection_field, '=', d_i]]
 */
 export function constructSelectionDomain(
    fieldName,
    selectionValue,
    operator,
 ) {
    if (operator === undefined) {
        operator = DEFAULT_OPERATOR;
    }

    //TODO: Construct the Selection Domain here
    const domain;

    return domain;
 }

 /**
  * Get a list of all Selection Values for the Selection field
  *
  * @param fieldName {string}: The name of the Selection field
  * @returns {string[]}: A list of Selection field Values in string format
  */
 export function getSelectionValues(
    fieldName
 ) {
    //TODO: Implement me!
    return [];
 }

 /**
  * Get a list of all Selection Tuples: (technical_name, frontend_name)
  *
  * @param fieldName {string}: The name of the Selection field
  * @returns {string[tuple(string, string)]}:
  *     A list of Selection tuples in string format.
  */
 export function getSelectionTuples(
    fieldName
 ) {
    //TODO: Implement me!
    return [[]];
 }
