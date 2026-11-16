import { tabsMarkdownPlugin } from 'vitepress-plugin-tabs'

export default ({
  base: '/UF5-Programacion_Modular_Funciones/',
  outDir: '../docs',
  markdown: {
    config(md) {
      md.use(tabsMarkdownPlugin)
    }
  },
  head: [
  ['link', { rel: 'icon', href: '/img/logo.png' }],
  ],
  locales: {
    root: {
      label: 'Español',
      lang: 'es-ES',
      link: '/',
      title: 'UF5 - Programación Modular y Funciones',
      description: 'Unidad 5 donde se abordan los conceptos de funciones.',
      themeConfig: {
        siteTitle: 'Funciones',
        outline: { label: 'En esta página' },
          docFooter: { prev: 'Anterior', next: 'Siguiente' },
          nav: [
            { text: '🏠 Inicio', link: '/' },
            { text: '📚 Contenidos', items: [
              { text: '1. Introducción', link: '/1-introduccio' },
              { text: "2. Declaración de una función", link: '/2-declaracio' },
              { text: '3. Llamar a una función', link: '/3-crida' },
              { text: "4. Ámbito de las variables", link: '/4-ambit' },
              { text: "5. Parámetros", link: '/5-parametres' },
              { text: "6. Devolución de un valor", link: "/6-devolucio" },
              { text: '7. Recursividad', link: '/7-recursivitat' },
              { text: '💡Ejemplos', link: '/8-exemples' },
              { text: '✏️Ejercicios', link: '/9-exercicis' },
              { text: '✅Solucions', link: '/11-solucions' }
            ]}
          ]
      }
    }
  },
  themeConfig: {
    logo: '/img/logo.png',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/GGEdu' }
    ],
    sidebar: {
      '/': [
        {
          text: '📚 Contenidos',
          items: [
            { text: '1. Introducción', link: '/1-introduccio' },
            { text: "2. Declaración de una función", link: '/2-declaracio' },
            { text: '3. Llamar a una función', link: '/3-crida' },
            { text: "4. Ámbito de las variables", link: '/4-ambit' },
            { text: "5. Parámetros", link: '/5-parametres' },
            { text: "6. Devolución de un valor", link: "/6-devolucio" },
            { text: '7. Recursividad', link: '/7-recursivitat' },
            { text: '💡Ejemplos', link: '/8-exemples' },
            { text: '✏️Ejercicios', link: '/9-exercicis' }
          ]
        },
        { text: '📚 Contenidos adicionales', items: [
          { text: 'Convertir letra a número', link: '/10-add_lletranumero' },
          { text: '<img src="img/logo-gva.png" class="logo-anim" style="vertical-align:middle; height:150px; margin-top:100px;">', link: '' }
        ]}
      ]
    },
    footer: {
      message: '<img src="/img/logo-autor.png" alt="Autor Principal" style="height:60px; margin: 0 auto; display:block;" />',
      copyright: 'Copyright © 2025'
    }
  }
})
