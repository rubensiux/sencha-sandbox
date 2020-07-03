Ext.define("sandbox.view.todo.Todo", {
    extend: "Ext.Container",
    xtype: "todo",
    controller: "todocontroller",
    viewModel: "todoviewmodel",
    requires: ['Ext.Responsive'],
    userCls: "componenteTodo",
    layout: {
        type: "vbox",
        align: "center"
    },
    flex: 1,
    props: {
        gatico: ''
    },
    items: [
        {
            xtype: "toolbar",
            height: 56,
            width: "100%",
            style: 'background-color: var(--base-color);',
            items: [
                {
                    xtype: 'container',
                    style: 'color: white;',
                    html: 'this.props.gatico'
                },
                '->',
                {
                    xtype: 'button',
                    ui: 'normal',
                    style: 'font-size: 30px; color: white; margin-right: 16px;',
                    iconMask: true,
                    iconCls: 'far fa-user-circle',
                    iconAlign:'center',
                    ripple: false,
                    menu: {
                        plain: true,
                        items:[
                            {
                                text: 'Progressively embrace',
                                itemId: 'itemA'
                            },
                            {
                                text: 'Compellingly predominate',
                                itemId: 'itemB'
                            },
                            {
                                text: 'Energistically syndicate',
                                itemId: 'itemC'
                            },
                            {
                                text: 'Interactively revolutionize',
                                itemId: 'itemD'
                            },
                            {
                                xtype: 'menuseparator'
                            },
                            {
                                text: 'Cerrar sesion',
                                itemId: 'itemCerrarSesion'
                            }
                        ],
                        defaults: {
                            handler: 'onItemMenuClick'
                        }
                    }
                }
            ]
        },
        {
            xtype: "panel",
            width: "100%",
            padding: 16,
            flex: 1,
            tbar: [
                { xtype: 'button', text: 'añadir' }
            ],
            bbar:
            [
                '->',
                {
                    xtype: 'segmentedbutton',
                    allowDepress: false,
                    defaults: {
                        focusCls: ''
                    },
                    items: [{
                        iconMask: true,
                        iconCls: 'fas fa-tasks',
                        iconAlign:'center',
                        // tooltip: 'todos'
                    }, {
                        iconMask: true,
                        iconCls: 'far fa-clock',
                        iconAlign:'center',
                        // tooltip: 'pendientes'
                    }, {
                        iconMask: true,
                        iconCls: 'fas fa-check',
                        iconAlign:'center',
                        // tooltip: 'terminados'
                    }],
                    listeners: {
                        toggle: 'onToggle',
                        afterRender: 'onAfterRender'
                    }
                }
            ],
            maxWidth: 600,
            items: []
        }
    ]
});
