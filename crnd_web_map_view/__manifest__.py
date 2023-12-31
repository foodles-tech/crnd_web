{
    'name': "CR&D Map View",
    'summary': (
        "This technical module provides view that allows to display "
        "objects on the map"),
    'author': "Center of Research and Development",
    'support': 'info@crnd.pro',
    'website': "https://crnd.pro",
    'license': 'LGPL-3',
    'version': '14.0.0.2.0',

    'depends': [
        'base_geolocalize',
        'web',
        'base',
    ],
    'data': [
        'templates/assets.xml',
    ],
    'qweb': [
        'static/src/xml/map_view.xml',
    ],

    'installable': True,
    'auto_install': False,
    'application': False,
}
