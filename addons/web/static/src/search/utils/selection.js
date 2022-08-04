/** @odoo-module **/

import { _lt } from "@web/core/l10n/translation";
import { Domain } from "@web/core/domain";
import { localization } from "@web/core/l10n/localization";

export const DEFAULT_OPERATOR = "=";


//-------------------------------------------------------------------------
// Functions
//-------------------------------------------------------------------------

/**
 * Constructs the string representation of a domain and its description. The
 * domain is of the form:
 *      ['|', d_1 ,..., '|', d_n]
 * where d_i is a Selection field value of the form
 *      [[selection_field, '=', d_i]]
 * @param fieldName {string}: The name of the selection field to construct the
 * domain for.
 * @param selectionValueId {Object}: The Id of the Selection Value to domain by.
 * @param operator {string}: The operator to use for constructing the domain.
 * @returns {string[]}: The constructed selection field domain.
 */
 export function constructSelectionDomain(
    fieldName,
    selectionValueId,
    operator,
 ) {
    // If no operator is provided, use the default operator, "="
    if (operator === undefined) {
        operator = DEFAULT_OPERATOR;
    }

    const selectionValue = selectionValueId.selection;

    const domain =new Domain([[fieldName, operator, selectionValue]]);

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
