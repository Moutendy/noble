

import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [
   {
     label: 'Bienvenu',
     isTitle: true
   },
   {
     label: 'Accueil',
     icon: 'home',
     link: 'general/blank-page',
   },
  /* {
     label: 'Web Apps',
     isTitle: true
   },
   {
     label: 'Email',
     icon: 'mail',
     subItems: [
       {
         label: 'Inbox',
         link: '/apps/email/inbox',
       },
       {
         label: 'Read',
         link: '/apps/email/read'
       },
       {
         label: 'Compose',
         link: '/apps/email/compose'
       },
     ]
   },


   {
     label: 'Chat',
     icon: 'message-square',
     link: '/apps/chat',
   },
   {
     label: 'Calendar',
     icon: 'calendar',
     link: '/apps/calendar',
     badge: {
       variant: 'primary',
       text: 'New',
     }
   },

    */
  /* {
     label: 'Components',
     isTitle: true
   },
   {
     label: 'UI Kit',
     icon: 'feather',
     subItems: [
       {
         label: 'Alerts',
         link: '/ui-components/alerts',
       },
       {
         label: 'Badges',
         link: '/ui-components/badges',
       },
       {
         label: 'Breadcrumbs',
         link: '/ui-components/breadcrumbs',
       },
       {
         label: 'Buttons',
         link: '/ui-components/buttons',
       },
       {
         label: 'Button group',
         link: '/ui-components/button-group',
       },
       {
         label: 'Cards',
         link: '/ui-components/cards',
       },
       {
         label: 'Carousel',
         link: '/ui-components/carousel',
       },
       {
         label: 'Collapse',
         link: '/ui-components/collapse',
       },
       {
         label: 'Datepicker',
         link: '/ui-components/datepicker',
       },
       {
         label: 'Dropdowns',
         link: '/ui-components/dropdowns',
       },
       {
         label: 'List group',
         link: '/ui-components/list-group',
       },
       {
         label: 'Media object',
         link: '/ui-components/media-object',
       },
       {
         label: 'Modal',
         link: '/ui-components/modal',
       },
       {
         label: 'Navs',
         link: '/ui-components/navs',
       },
       {
         label: 'Navbar',
         link: '/ui-components/navbar',
       },
       {
         label: 'Pagination',
         link: '/ui-components/pagination',
       },
       {
         label: 'Popovers',
         link: '/ui-components/popovers',
       },
       {
         label: 'Progress',
         link: '/ui-components/progress',
       },
       {
         label: 'Rating',
         link: '/ui-components/rating',
       },
       {
         label: 'Scrollbar',
         link: '/ui-components/scrollbar',
       },
       {
         label: 'Spinners',
         link: '/ui-components/spinners',
       },
       {
         label: 'Timepicker',
         link: '/ui-components/timepicker',
       },
       {
         label: 'Tooltips',
         link: '/ui-components/tooltips',
       },
       {
         label: 'Typeadhed',
         link: '/ui-components/typeahead',
       },
     ]
   },
   {
     label: 'Advanced UI',
     icon: 'anchor',
     subItems: [
       {
         label: 'Cropper',
         link: '/advanced-ui/cropper',
       },
       {
         label: 'Owl carousel',
         link: '/advanced-ui/owl-carousel',
       },
       {
         label: 'Sweet alert',
         link: '/advanced-ui/sweet-alert',
       },
     ]
   },

   */
  {
    label: 'Ajouter',
    icon: 'arrow-down-circle',
    subItems: [
      {
        label: 'Nature taxe habitation',
        link: 'form-elements/taxe-habitation'
      },
      {
        label: 'Pvc Evenement',
        link: 'form-elements/pvcevenement'
      },
      {
        label: 'Pvc Decission',
        link: 'form-elements/pvcdecision'
      },
      {
        label: 'Pvc Object Requete',
        link: 'form-elements/pvcobjectrequete'
      },
    ]
  },
   {
     label: 'Consulter',
     icon: 'cloud',
     subItems: [

       {
         label: 'Nature Taxe Habitation',
         link: 'tables/taxe_naturel_habitaion',
       },
       {
         label: 'Pvc Evenement',
         link: 'tables/pvcevenement',
       },
       {
         label: 'Pvc Decission',
         link: 'tables/pvcdecision',
       },
       {
         label: 'Pvc Object Requete',
         link: 'tables/pvcobjectrequete',
       },
     ]
   },

  ]
