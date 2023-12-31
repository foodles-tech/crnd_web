CRND Map View
=============


.. |badge2| image:: https://img.shields.io/badge/license-LGPL--3-blue.png
    :target: http://www.gnu.org/licenses/lgpl-3.0-standalone.html
    :alt: License: LGPL-3

.. |badge3| image:: https://img.shields.io/badge/powered%20by-yodoo.systems-00a09d.png
    :target: https://yodoo.systems

.. |badge5| image:: https://img.shields.io/badge/maintainer-CR&D-purple.png
    :target: https://crnd.pro/


|badge2| |badge5|

This addon add map view, which displays objects according to their geolocation.

Usage
'''''

Example:

    .. code:: xml

        <record id="some_id" model="ir.ui.view">
            <field name="model">model.name</field>
            <field name="arch" type="xml">
                <crnd_map_view
                        latitude_field="name_of_latitude_field"
                        longitude_field="name_of_longitude_field"
                        marker_title_field="name_of_marker_title_field"
                        marker_popup_info_fields="{'label_1': 'name_of_field_1', 'label_2': 'name_of_field_2'}"
                        max_search_zoom="max_map_zoom_after_search">
                </crnd_map_view>
            </field>
        </record>

Launch your own ITSM system in 60 seconds:
''''''''''''''''''''''''''''''''''''''''''

Create your own `Bureaucrat ITSM <https://yodoo.systems/saas/template/bureaucrat-itsm-demo-data-95>`__ database

|badge3|

Bug Tracker
===========

Bugs are tracked on `https://crnd.pro/requests <https://crnd.pro/requests>`_.
In case of trouble, please report there.


Maintainer
''''''''''
.. image:: https://crnd.pro/web/image/3699/300x140/crnd.png

Our web site: https://crnd.pro/

This module is maintained by the Center of Research & Development company.

We can provide you further Odoo Support, Odoo implementation, Odoo customization, Odoo 3rd Party development and integration software, consulting services. Our main goal is to provide the best quality product for you.

For any questions `contact us <mailto:info@crnd.pro>`__.
