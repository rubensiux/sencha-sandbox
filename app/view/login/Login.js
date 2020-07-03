Ext.define("sandbox.view.login.Login", {
    extend: "Ext.Container",
    xtype: "login",
    controller: "logincontroller",
    viewModel: "loginviewmodel",
    requires: ['Ext.Responsive'],
    userCls: "componenteLogin",
    layout: {
        type: "hbox",
        pack: "end",
        align: "center"
    },
    flex: 1,
    responsiveConfig: {
        'width < 768': {
            layout: {
                type: "hbox",
                pack: "center",
                align: "center"
            }
        },
        'width >= 768': {
            layout: {
                type: "hbox",
                pack: "end",
                align: "center"
            }
        }
    },
    items: [
        {
            xtype: "tabpanel",
            width: 320,
            margin: 16,
            userCls: "elementoTabPanel",
            items: [{
                tabConfig: {
                    title: 'Sesion',
                    flex: 1
                },
                bodyPadding: 16,
                items: [
                    {
                        xtype: "form",
                        userCls: "elementoFormLogin",
                        buttonAlign: "center",
                        buttons: [
                            {
                                text: "iniciar sesion",
                                handler: "onIniciar"
                            }
                        ],
                        items: [
                            {
                                xtype: "container",
                                userCls: "login-header",
                                padding: 16,
                                height: 120,
                                html: '<i class="far fa-user-circle"></i>',
                                layout: {
                                    type: "hbox",
                                    pack: "center",
                                    align: "center",
                                }
                            },
                            {
                                xtype: "textfield",
                                name: "usuario",
                                fieldLabel: "Usuario",
                                maxLength: 32,
                                allowBlank: false,
                                minLength: 2,
                                anchor: "100%"
                            },
                            {
                                xtype: "textfield",
                                name: "contrasena",
                                fieldLabel: "Contraseña",
                                inputType: 'password',
                                alwaysOnTop: true,
                                animateUnderline: false,
                                allowBlank: false,
                                minLength: 2,
                                anchor: "100%"
                            }
                        ]
                    }
                ]
            }, {
                tabConfig: {
                    title: 'Registro',
                    flex: 1
                },
                bodyPadding: 16,
                items: [
                    {
                        xtype: "form",
                        userCls: "elementoFormLogin",
                        buttonAlign: "center",
                        buttons: [
                            {
                                text: "registrarme",
                                handler: "onRegistrarme",
                                bind: {
                                    disabled: '{disabled}'
                                }
                            }
                        ],
                        items: [
                            {
                                xtype: "container",
                                userCls: "login-header",
                                padding: 16,
                                height: 120,
                                html: '<i class="fas fa-user-circle"></i>',
                                layout: {
                                    type: "hbox",
                                    pack: "center",
                                    align: "center",
                                }
                            },
                            {
                                xtype: "textfield",
                                name: "usuario",
                                fieldLabel: "Usuario",
                                maxLength: 32,
                                allowBlank: false,
                                minLength: 2,
                                anchor: "100%"
                            },
                            {
                                xtype: "textfield",
                                name: "contrasena",
                                fieldLabel: "Contraseña",
                                inputType: 'password',
                                alwaysOnTop: true,
                                animateUnderline: false,
                                allowBlank: false,
                                minLength: 2,
                                anchor: "100%"
                            }
                        ]
                    }
                ]
            }]
        }
    ]
});
