const Institution = {
  Get: {
    baseURL: process.env.NEXT_PUBLIC_APPALERTAS_API,
    url: '/alerts/institutions',
    method: 'post',
    timeout: '50000',
  },
  Show: {
    baseURL: process.env.NEXT_PUBLIC_APPALERTAS_API,
    url: '/alerts/institution/institutionSlug',
    method: 'get',
    timeout: '50000',
  },
  Process: {
    Get: {
      baseURL: process.env.NEXT_PUBLIC_APPALERTAS_API,
      url: '/alerts/institution/institutionSlug/processing/processes',
      method: 'post',
      timeout: '50000',
    },
    Show: {
      baseURL: process.env.NEXT_PUBLIC_APPALERTAS_API,
      url: '/alerts/institution/institutionSlug/processing/process/processId',
      method: 'get',
      timeout: '50000',
    },
  },
  Permission: {
    Available: {
      Get: {
        baseURL: process.env.NEXT_PUBLIC_APPALERTAS_API,
        url: '/alerts/institution/institutionSlug/local-admin/permission/person/local-inst/available',
        method: 'post',
        timeout: '50000',
      },
      Group: {
        Get: {
          baseURL: process.env.NEXT_PUBLIC_APPALERTAS_API,
          url: '/alerts/institution/institutionSlug/local-admin/permission/permission-group/local-inst/available',
          method: 'post',
          timeout: '50000',
        },
      },
    },
    Get: {
      baseURL: process.env.NEXT_PUBLIC_APPALERTAS_API,
      url: '/alerts/institution/institutionSlug/permissions',
      method: 'post',
      timeout: '50000',
    },
    Update: {
      baseURL: process.env.NEXT_PUBLIC_APPALERTAS_API,
      url: '/alerts/institution/institutionSlug/local-admin/permission/person/local-inst/personId',
      method: 'put',
      timeout: '50000',
    },
  },
  Group: {
    Permission: {
      Update: {
        baseURL: process.env.NEXT_PUBLIC_APPALERTAS_API,
        url: '/alerts/institution/institutionSlug/local-admin/permission/permission-group/local-inst/groupSlug',
        method: 'put',
        timeout: '50000',
      },
    },
    Available: {
      Get: {
        baseURL: process.env.NEXT_PUBLIC_APPALERTAS_API,
        url: '/alerts/institution/institutionSlug/permission-groups',
        method: 'post',
        timeout: '50000',
      },
    },
    User: {
      Get: {
        baseURL: process.env.NEXT_PUBLIC_APPALERTAS_API,
        url: '/alerts/institution/institutionSlug/permission-group/groupSlug/person',
        method: 'post',
        timeout: '50000',
      },
      Bind: {
        baseURL: process.env.NEXT_PUBLIC_APPALERTAS_API,
        url: '/alerts/institution/institutionSlug/permission-group/groupSlug/person/personId',
        method: 'post',
        timeout: '50000',
      },
      Unbind: {
        baseURL: process.env.NEXT_PUBLIC_APPALERTAS_API,
        url: '/alerts/institution/institutionSlug/permission-group/groupSlug/person/personId',
        method: 'delete',
        timeout: '50000',
      },
    },
    Show: {
      baseURL: process.env.NEXT_PUBLIC_APPALERTAS_API,
      url: '/alerts/institution/institutionSlug/local-admin/permission/permission-group/local-inst/slug/groupSlug',
      method: 'post',
      timeout: '50000',
    },
    Create: {
      baseURL: process.env.NEXT_PUBLIC_APPALERTAS_API,
      url: '/alerts/institution/institutionSlug/permission-group',
      method: 'post',
      timeout: '50000',
    },
    Update: {
      baseURL: process.env.NEXT_PUBLIC_APPALERTAS_API,
      url: '/alerts/institution/institutionSlug/permission-group/groupSlug',
      method: 'patch',
      timeout: '50000',
    },
    Delete: {
      baseURL: process.env.NEXT_PUBLIC_APPALERTAS_API,
      url: '/alerts/institution/institutionSlug/permission-group/groupSlug',
      method: 'delete',
      timeout: '50000',
    },
  },
  Terms: {
    Similar: {
      Get: {
        baseURL: process.env.NEXT_PUBLIC_APPALERTAS_API,
        url: '/alerts/institution/institutionSlug/local-admin/term/main-term/termId/similar-terms',
        method: 'post',
        timeout: '50000',
      },
      Create: {
        baseURL: process.env.NEXT_PUBLIC_APPALERTAS_API,
        url: '/alerts/institution/institutionSlug/local-admin/term/main-term/termId/similar-term',
        method: 'post',
        timeout: '50000',
      },
      Update: {
        baseURL: process.env.NEXT_PUBLIC_APPALERTAS_API,
        url: '/alerts/institution/institutionSlug/local-admin/term/main-term/termId/similar-term/similarTermId',
        method: 'patch',
        timeout: '50000',
      },
      Show: {
        baseURL: process.env.NEXT_PUBLIC_APPALERTAS_API,
        url: '/alerts/institution/institutionSlug/local-admin/term/main-term/termId/similarTermId',
        method: 'get',
        timeout: '50000',
      },
      Delete: {
        baseURL: process.env.NEXT_PUBLIC_APPALERTAS_API,
        url: '/alerts/institution/institutionSlug/local-admin/term/main-term/termId/similar-term/similarTermId',
        method: 'delete',
        timeout: '50000',
      },
    },
    Get: {
      baseURL: process.env.NEXT_PUBLIC_APPALERTAS_API,
      url: '/alerts/institution/institutionSlug/local-admin/term/main-terms',
      method: 'post',
      timeout: '50000',
    },
    Create: {
      baseURL: process.env.NEXT_PUBLIC_APPALERTAS_API,
      url: '/alerts/institution/institutionSlug/local-admin/term/main-term',
      method: 'post',
      timeout: '50000',
    },
    Update: {
      baseURL: process.env.NEXT_PUBLIC_APPALERTAS_API,
      url: '/alerts/institution/institutionSlug/local-admin/term/main-term/termId',
      method: 'patch',
      timeout: '50000',
    },
    Show: {
      baseURL: process.env.NEXT_PUBLIC_APPALERTAS_API,
      url: '/alerts/institution/institutionSlug/local-admin/term/main-term/termId',
      method: 'get',
      timeout: '50000',
    },
    Delete: {
      baseURL: process.env.NEXT_PUBLIC_APPALERTAS_API,
      url: '/alerts/institution/institutionSlug/local-admin/term/main-term/termId',
      method: 'Delete',
      timeout: '50000',
    },
  },
  User: {
    Group: {
      Get: {
        baseURL: process.env.NEXT_PUBLIC_APPALERTAS_API,
        url: '/alerts/institution/institutionSlug/permission-group/person/personId',
        method: 'post',
        timeout: '50000',
      },
    },
    Get: {
      baseURL: process.env.NEXT_PUBLIC_APPALERTAS_API,
      url: '/alerts/institution/institutionSlug/local-admin/permission/person/local-inst/eligible',
      method: 'post',
      timeout: '50000',
    },
    Permission: {
      baseURL: process.env.NEXT_PUBLIC_APPALERTAS_API,
      url: '/alerts/institution/institutionSlug/local-admin/permission/person/local-inst/personId',
      method: 'post',
      timeout: '50000',
    },
    LinkedUsers: {
      baseURL: process.env.NEXT_PUBLIC_APPALERTAS_API,
      url: '/alerts/institution/institutionSlug/local-admin/permission/person/local-inst',
      method: 'post',
      timeout: '50000',
    },
  },
  Person: {
    Get: {
      baseURL: process.env.NEXT_PUBLIC_APPALERTAS_API,
      url: '/alerts/institution/institutionSlug/person',
      method: 'post',
      timeout: '50000',
    },
    Show: {
      baseURL: process.env.NEXT_PUBLIC_APPALERTAS_API,
      url: '/alerts/institution/institutionSlug/person/personId',
      method: 'get',
      timeout: '50000',
    },
    Origins: {
      baseURL: process.env.NEXT_PUBLIC_APPALERTAS_API,
      url: '/alerts/institution/institutionSlug/person/personId/origin-person',
      method: 'get',
      timeout: '50000',
    },
    Profile: {
      baseURL: process.env.NEXT_PUBLIC_APPALERTAS_API,
      url: '/alerts/institution/institutionSlug/person/personId/origin-person/profile',
      method: 'post',
      timeout: '50000',
    },
    Documents: {
      baseURL: process.env.NEXT_PUBLIC_APPALERTAS_API,
      url: '/alerts/institution/institutionSlug/person/personId/origin-person/document',
      method: 'post',
      timeout: '50000',
    },
    Contacts: {
      baseURL: process.env.NEXT_PUBLIC_APPALERTAS_API,
      url: '/alerts/institution/institutionSlug/person/personId/origin-person/contact',
      method: 'post',
      timeout: '50000',
    },
    Addresses: {
      baseURL: process.env.NEXT_PUBLIC_APPALERTAS_API,
      url: '/alerts/institution/institutionSlug/person/personId/origin-person/address',
      method: 'post',
      timeout: '50000',
    },
  },
}

export default Institution
