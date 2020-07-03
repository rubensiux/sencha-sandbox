Ext.define('sandbox.view.login.LoginController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.logincontroller',
    beforeInit: function() {
        console.log('before login');
    },
    init: function() {
        console.log('init login');
    },
    // routes: {
	// 	':xtype': {action: 'mainRoute'}
	// },
    // defaultToken : 'home',
    form: null,
    // mainRoute: function(id) {
    //     console.log(id);
    // },
    onIniciar: function (e) {
        this.form = e.up('form');
        const datos = { ...this.form.getForm().getValues() };
        const req = `${datos.usuario}-${datos.contrasena}`;
        // form.applyToFields({disabled:true});
        if (this.form.isValid()) {
            this.form.disable();
            Ext.Ajax.request({
                url: `http://localhost:3000/usuarios/${req}`,
                method : "GET",
                success: (res) => {
                    const response = JSON.parse(res.responseText);
                    this.getViewModel().setData({usuario: datos.usuario, token: response.id});
                    this.obtenerUsuario(response);
                },
                failure: () => {
                    this.form.enable();
                    Ext.toast({
                        html: 'Error intentando crear sesion',
                        align: 'bl'
                    });
                }
            });
        } else {
            Ext.toast({
                html: 'Datos no validos',
                align: 'bl'
            });
        }
    },
    onRegistrarme: function(e) {
        this.form = e.up('form');
        const datos = { ...this.form.getForm().getValues() };
        if (this.form.isValid()) {
            this.form.disable();
            Ext.Ajax.request({
                url: `http://localhost:3000/usuarios`,
                method : 'POST',
                jsonData: {
                    ...datos,
                    id: `${datos.usuario}-${datos.contrasena}`
                },
                success: (res) => {
                    const response = JSON.parse(res.responseText);
                    this.getViewModel().setData({usuario: datos.usuario, token: response.id});
                    this.obtenerUsuario(response);
                },
                failure: () => {
                    this.form.enable();
                    Ext.toast({
                        html: 'Error intentando crear sesion',
                        align: 'bl'
                    });
                }
            });
        } else {
            Ext.toast({
                html: 'Datos no validos',
                align: 'bl'
            });
        }
    },
    obtenerUsuario: function(_datos) {
        Ext.Ajax.request({
            url: 'https://randomuser.me/api/?noinfo',
            method : "GET",
            success: (res) => {
                this.form.enable();
                const response = JSON.parse(res.responseText);
                const [perfil] = response.results;
                this.getViewModel().setData({perfil: { ...perfil }});
                // remover login
                // this.getView().up().items.removeAll();
                const [parent] = Ext.ComponentQuery.query('entry');
                parent.items.removeAll();
                const todoView = new sandbox.view.todo.Todo({
                    props: {
                        gatico: 'gato mew mew'
                    }
                });
                parent.items.add(todoView);
                parent.update();
            },
            failure: () => {
                this.form.enable();
                Ext.toast({
                    html: 'Error obteniendo perfil',
                    align: 'bl'
                });
            }
        });
    }
});
