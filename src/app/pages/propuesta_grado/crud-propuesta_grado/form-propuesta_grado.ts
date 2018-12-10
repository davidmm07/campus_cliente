
export let FORM_PROPUESTA_GRADO = {
    titulo: 'PropuestaGrado',
    tipo_formulario: 'mini',
    btn: 'Guardar',
    alertas: true,
    modelo: 'PropuestaGrado',
    campos: [
    // {
    //     etiqueta: 'input',
    //     claseGrid: 'col-6',
    //     nombre: 'Id',
    //     label_i18n: 'id',
    //     placeholder_i18n: 'id',
    //     requerido: true,
    //     tipo: 'number',
    // },
    {
        etiqueta: 'input',
        claseGrid: 'col-6',
        nombre: 'Nombre',
        label_i18n: 'titulo_proyecto',
        placeholder_i18n: 'placeholder_titulo_proyecto',
        requerido: true,
        tipo: 'text',
    },
    {
        etiqueta: 'select',
        claseGrid: 'col-6',
        nombre: 'Grupoinvestigacion',
        label_i18n: 'grupo_investigacion',
        placeholder_i18n: 'placeholder_grupo_investigacion',
        requerido: false,
        tipo: 'text',
        key: 'Nombre',
        oopciones: [],
    },
    {
        etiqueta: 'select',
        claseGrid: 'col-6',
        nombre: 'Lineainvestigacion',
        label_i18n: 'linea_investigacion',
        placeholder_i18n: 'placeholder_linea_investigacion',
        requerido: false,
        tipo: 'LineaInvestigacion',
        key: 'Nombre',
        opciones: [],
    },
    {
        etiqueta: 'select',
        claseGrid: 'col-6',
        nombre: 'Enfasis',
        label_i18n: 'enfasis',
        placeholder_i18n: 'enfasis',
        requerido: true,
        tipo: 'Enfasis',
        key: 'Nombre',
        opciones: [],
    },
    {
        etiqueta: 'select',
        claseGrid: 'col-6',
        nombre: 'Tipoproyecto',
        label_i18n: 'tipoproyecto',
        placeholder_i18n: 'tipoproyecto',
        requerido: false,
        tipo: 'TipoProyecto',
        key: 'Nombre',
        opciones: [],
    },
    {
        etiqueta: 'file',
        claseGrid: 'col-6',
        nombre: 'Formatoproyecto',
        label_i18n: 'formatoproyecto',
        placeholder_i18n: 'formatoproyecto',
        requerido: false,
        tipo: 'text',
    },
    {
        etiqueta: 'editor',
        claseGrid: 'col-12',
        nombre: 'Resumen',
        label_i18n: 'resumen',
        placeholder_i18n: 'resumen',
        requerido: false,
        tipo: 'text',
    },
    ],
}
