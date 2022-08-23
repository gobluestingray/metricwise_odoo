# Copyright (C) 2019 IBM Corp.
# Copyright (C) 2019 Open Source Integrators
# License AGPL-3.0 or later (http://www.gnu.org/licenses/agpl).

{
    "name": "Batch Report Printing",
    "summary": "Ability to print multiple QWeb reports in a single batch.",
    "version": "13.0.1.0.1",
    "license": "AGPL-3",
    "author": "Open Source Integrators, Odoo Community Association (OCA)",
    "category": "Reporting",
    "website": "https://github.com/OCA/reporting-engine",
    "depends": ["sale", "stock"],
    "data": [
        "security/ir.model.access.csv",
        "views/form_batch_print_report_wizard.xml",
        "views/ir_action_report_view.xml",
        "views/report_batch_template.xml",
        "views/action_batch_print_report.xml",
    ],
    "installable": True,
    "maintainers": ["bodedra"],
}
