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
                  buildHookId: '5ebaaf3a1787f2918ecc3a2a',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-bgmwzr6u',
                  apiId: '5433b83c-a155-49c2-add6-02ba2a1ef25a'
                },
                {
                  buildHookId: '5ebaaf3ad6602d9ce2c97e3a',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-6pp99taf',
                  apiId: '8833c818-ac5b-4120-8fef-eaa12b1771d4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mattcoffyn/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-6pp99taf.netlify.app', category: 'apps'}
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
