export let FORM_OTRO_DOCUMENTO = {
    // titulo: 'OtroDocumento',
    tipo_formulario: 'mini',
    btn: 'Guardar',
    alertas: true,
    modelo: 'OtroDocumento',
    campos: [
        {
            etiqueta: 'input',
            claseGrid: 'col-lg-6 col-md-6 col-sm-12 col-xs-12',
            nombre: 'Titulo',
            label_i18n: 'titulo_documento',
            placeholder_i18n: 'placeholder_titulo_documento',
            requerido: true,
            tipo: 'text',
        },
        {
            etiqueta: 'input',
            claseGrid: 'col-lg-3 col-md-3 col-sm-12 col-xs-12',
            nombre: 'Ano',
            label_i18n: 'ano',
            placeholder_i18n: 'ano',
            requerido: true,
            tipo: 'number',
            minimo: 1500,
        },
        {
            etiqueta: 'select',
            claseGrid: 'col-lg-3 col-md-3 col-sm-12 col-xs-12',
            nombre: 'Mes',
            label_i18n: 'mes',
            placeholder_i18n: 'mes',
            requerido: true,
            tipo: 'number',
            key: 'Nombre',
            relacion: false,
            opciones: [
                { Id: 1, Nombre: 'Enero' },
                { Id: 2, Nombre: 'Febrero' },
                { Id: 3, Nombre: 'Marzo' },
                { Id: 4, Nombre: 'Abril' },
                { Id: 5, Nombre: 'Mayo' },
                { Id: 6, Nombre: 'Junio' },
                { Id: 7, Nombre: 'Julio' },
                { Id: 8, Nombre: 'Agosto' },
                { Id: 9, Nombre: 'Septiembre|' },
                { Id: 10, Nombre: 'Octubre' },
                { Id: 11, Nombre: 'Noviembre' },
                { Id: 12, Nombre: 'Diciembre' },
            ],
        },
        {
            etiqueta: 'input',
            claseGrid: 'col-lg-3 col-md-3 col-sm-12 col-xs-12',
            nombre: 'NumeroPaginas',
            label_i18n: 'paginas',
            placeholder_i18n: 'paginas',
            requerido: true,
            tipo: 'number',
            minimo: 1,
        },
        {
            etiqueta: 'input',
            claseGrid: 'col-lg-3 col-md-3 col-sm-12 col-xs-12',
            nombre: 'Doi',
            label_i18n: 'doi',
            placeholder_i18n: 'doi',
            requerido: false,
            tipo: 'text',
        },
        {
            etiqueta: 'input',
            claseGrid: 'col-lg-6 col-md-6 col-sm-12 col-xs-12',
            nombre: 'Url',
            label_i18n: 'url',
            placeholder_i18n: 'url',
            requerido: false,
            tipo: 'text',
        },
    ],
}
