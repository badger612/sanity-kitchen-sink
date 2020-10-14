export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f864398a6a0a513cc40bd32',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-kxav31he',
                  apiId: '7f060657-c08f-46b2-afc0-ff6f342f1211'
                },
                {
                  buildHookId: '5f8643987ad0a800d7b7d097',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-v4zpznyc',
                  apiId: '57318248-8c07-4554-8962-dbf3a3238606'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/badger612/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-v4zpznyc.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
