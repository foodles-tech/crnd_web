{
    "name": "Test CRND Web Models",
    "version": "12.0.0.10.0",
    "author": "Center of Research and Development",
    "website": "https://crnd.pro",
    'summary': 'Module for testing web addons.',
    "license": "LGPL-3",
    'category': 'Technical Settings',
    'depends': [
        'crnd_web_diagram_plus',
        'crnd_web_list_popover_widget',
        'crnd_web_float_full_time_widget',
        'crnd_web_m2o_info_widget',
        'crnd_web_tree_colored_field',
        'crnd_web_on_create_action',
        'crnd_web_actions',
        'generic_mixin',
        'crnd_web_field_domain',
    ],
    'demo': [
        'demo/popover_widget.xml',
        'demo/float_full_time_widget.xml',
        'demo/m2o_info_widget.xml',
        'demo/tree_colored_field.xml',
        'demo/web_diagram_plus.xml',
        'demo/crnd_web_field_domain.xml',
    ],
    'data': [
        'security/ir.model.access.csv',
        'views/popover_widget_text_model.xml',
        'views/popover_widget_html_model.xml',
        'views/popover_widget_char_model.xml',
        'views/popover_widget.xml',
        'views/m2o_info_widget.xml',
        'views/float_full_time_widget.xml',
        'views/tree_colored_field.xml',
        'views/web_diagram_plus.xml',
        'views/web_diagram_plus_arrow.xml',
        'views/web_diagram_plus_node.xml',
        'views/test_crnd_web_model_book.xml',
        'views/test_crnd_web_actions.xml',
        'views/test_crnd_web_field_domain.xml',
        'wizard/book_wizard_create.xml',
        'views/assets.xml',
    ],
    'images': [],
    'installable': True,
    'auto_install': False,
}
