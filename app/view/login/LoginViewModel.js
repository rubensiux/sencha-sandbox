Ext.define('sandbox.view.login.LoginViewModel', {
	extend: 'Ext.app.ViewModel',
	alias: 'viewmodel.loginviewmodel',
	data: {
		disabled: false,
		usuario: '',
		token: 0,
		perfil: null
	},
	setDisabled: function(state) {
		this.set('disabled', state);
	}
});
