
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
        { path: '', name: 'home', component: () => import('pages/IndexPage.vue') },
        { path: 'config', name: 'config', component: () => import('pages/Config.vue') },

        { path: 'edoobox', name: 'edoobox', component: () => import('pages/Edoobox.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
