const AlertTypes = {
  Get: {
    baseURL: process.env.NEXT_PUBLIC_APPALERTAS_API,
    url: '/alerts/institution/institutionSlug/local-admin/alert/alert-types',
    method: 'post',
    timeout: '50000',
  },
  Show: {
    baseURL: process.env.NEXT_PUBLIC_APPALERTAS_API,
    url: '/alerts/institution/institutionSlug/local-admin/alert/alert-type/alertTypeSlug',
    method: 'get',
    timeout: '50000',
  },
  Update: {
    baseURL: process.env.NEXT_PUBLIC_APPALERTAS_API,
    url: '/alerts/institution/institutionSlug/local-admin/alert/alert-type/alertTypeSlug',
    method: 'patch',
    timeout: '50000',
  },
  Delete: {
    baseURL: process.env.NEXT_PUBLIC_APPALERTAS_API,
    url: '/alerts/institution/institutionSlug/local-admin/alert/alert-type/alertTypeSlug',
    method: 'delete',
    timeout: '50000',
  },
  Create: {
    baseURL: process.env.NEXT_PUBLIC_APPALERTAS_API,
    url: '/alerts/institution/institutionSlug/local-admin/alert/alert-type',
    method: 'post',
    timeout: '50000',
  },
  CheckSlug: {
    baseURL: process.env.NEXT_PUBLIC_APPALERTAS_API,
    url: '/alerts/institution/institutionSlug/local-admin/alert/alert-type/slug/alertTypeSlug',
    method: 'get',
    timeout: '50000',
  },
}

export default AlertTypes
