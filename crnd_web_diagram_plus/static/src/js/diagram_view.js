odoo.define('web_diagram_plus.DiagramPlusView', function (require) {
    "use strict";

    var BasicView = require('web.BasicView');
    var core = require('web.core');
    var DiagramPlusModel = require('web_diagram_plus.DiagramPlusModel');
    var DiagramPlusRenderer = require('web_diagram_plus.DiagramPlusRenderer');
    var DiagramPlusController = require(
        'web_diagram_plus.DiagramPlusController');

    var _lt = core._lt;

    /**
     * Diagram View
     */
    var DiagramPlusView = BasicView.extend({
        display_name: _lt('DiagramPlus'),
        icon: 'fa-code-fork',
        multi_record: false,
        searchable: false,

        // Disable search
        withSearchPanel: false,
        withSearchBar: false,

        jsLibs: [[
            '/crnd_web_diagram_plus/static/lib/js/jquery.mousewheel.js',
            '/crnd_web_diagram_plus/static/lib/js/raphael-2.0.2/raphael-min.js',
        ]],
        config: _.extend({}, BasicView.prototype.config, {
            Model: DiagramPlusModel,
            Renderer: DiagramPlusRenderer,
            Controller: DiagramPlusController,
        }),
        viewType: 'diagram_plus',

        /**
         * @override
         * @param {Object} viewInfo
         * @param {Object} params
         */
        init: function (viewInfo, params) {
            this._super.apply(this, arguments);
            var self = this;
            var arch = this.arch;
            // Compute additional data for diagram model
            function toTitleCase (str) {
                return str.replace(/\w\S*/g, function (txt) {
                    return txt.charAt(0).toUpperCase() +
                           txt.substr(1).toLowerCase();
                });
            }

            var nodes = arch.children[0];
            var connectors = arch.children[1];
            var node_model = nodes.attrs.object;
            var connector_model = connectors.attrs.object;
            var labels = _.map(_.where(arch.children, {tag: 'label'}),
                function (label) {
                    return label.attrs.string;
                }
            );

            // Auto layout is enabled by default, but could be disabled
            // via attr auto_layout on the view
            var auto_layout = null;
            if ('auto_layout' in arch.attrs) {
                // Here we have to parse both values 'False', and 'false'
                auto_layout = _.str.toBool(arch.attrs.auto_layout);
                if (_.isUndefined(auto_layout)) {
                    auto_layout = true;
                }
            } else {
                auto_layout = true;
            }

            var invisible_nodes = [];
            var visible_nodes = [];
            var node_fields_string = [];
            _.each(nodes.children, function (child) {
                if (child.attrs.invisible === '1') {
                    invisible_nodes.push(child.attrs.name);
                } else {
                    var fieldString = self.fields[child.attrs.name].string ||
                        toTitleCase(child.attrs.name);
                    visible_nodes.push(child.attrs.name);
                    node_fields_string.push(fieldString);
                }
            });

            var connector_fields_string = _.map(connectors.children,
                function (conn) {
                    return self.fields[conn.attrs.name].string ||
                        toTitleCase(conn.attrs.name);
                }
            );

            this.loadParams = _.extend({}, this.loadParams, {
                currentId: params.currentId,
                nodes: nodes,
                labels: labels,
                invisible_nodes: invisible_nodes,
                visible_nodes: visible_nodes,
                node_fields_string: node_fields_string,
                node_model: node_model,
                connectors: connectors,
                connector_model: connector_model,
                connector_fields_string: connector_fields_string,
                auto_layout: auto_layout,
            });

            this.controllerParams = _.extend({}, this.controllerParams, {
                domain: params.domain,
                context: params.context,
                ids: params.ids,
                currentId: params.currentId,
            });
        },

        // --------------------------------------------------------------------
        // Public
        // --------------------------------------------------------------------

        /**
         * This override is quite tricky: the graph renderer uses Raphael.js to
         * render itself, so it needs it to be loaded in the window before
         * rendering.
         * However, the raphael.js library is built in such a way that if it
         * detects that a module system is present, it will try to use it.
         * So, in that case, it is not available on window.Raphael.
         * This means that the diagram view is then broken.
         *
         * As a workaround, we simply remove and restore the define function,
         * if present, while we are loading Raphael.
         *
         * @override
         */
        getController: function () {
            var oldDefine = window.define;
            delete window.define;
            return this._super.apply(this, arguments).then(function (view) {
                window.define = oldDefine;
                return view;
            });
        },
    });

    return DiagramPlusView;

});
