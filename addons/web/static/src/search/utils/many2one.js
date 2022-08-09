/** @odoo-module **/

import { _lt } from "@web/core/l10n/translation";
import { Domain } from "@web/core/domain";
import { localization } from "@web/core/l10n/translation";

export const DEFAULT_OPERATOR = "=";

//-------------------------------------------------------------------------
// Functions
//-------------------------------------------------------------------------

/**
 * Constructs the string representation of a domain and its description. The
 * domain is of the form:
 *      ['|', d_1 ,..., '|', d_n]
 * where d_i is a Many2one field record id of the form
 *      [[many2one_field, '=', d_i]]
 * @param fieldName {string}: The name of the Many2one field to construct the
 * domain for.
 * @param many2OneValueId {Object}: The Id of the Many2one Value to domain by.
 * @param operator {string}: The operator to use for constructing the domain.
 * @returns {string[]}: The constructed Many2one field domain.
 */
 export function constructMany2OneDomain(
    fieldName,
    many2OneValueId,
    operator,
 ) {
    // If no operator is provided, use the default operator, "="
    if (operator === undefined) {
        operator = DEFAULT_OPERATOR;
    }

    const many2OneValue = many2OneValueId.id;

    const domain =new Domain([[fieldName, operator, many2OneValue]]);

    return domain;
 }

  /**
  * Get a list of all Many2one Values for the Many2one field
  *
  * @param fieldName {string}: The name of the Many2one field
  * @param limit {int}: The number of records to get values for
  * @param page_number {int}:
  *     Determines which page of records, of length limit to get
  * @returns {string[]}: A list of Selection field Values in string format
  */
 export function getMany2OneValues(
    fieldName
    limit
    page_number
 ) {
    //TODO: Implement me!
    return [];
 }
