const Alerts = {
  Get: {
    baseURL: process.env.NEXT_PUBLIC_APPALERTAS_API,
    url: '/alerts/institution/institutionSlug/alert/alerts',
    method: 'post',
    timeout: '50000',
  },
  Show: {
    baseURL: process.env.NEXT_PUBLIC_APPALERTAS_API,
    url: '/alerts/institution/institutionSlug/alert/alertId',
    method: 'get',
    timeout: '50000',
  },
  FollowUps: {
    Add: {
      baseURL: process.env.NEXT_PUBLIC_APPALERTAS_API,
      url: '/alerts/institution/institutionSlug/alert/alertId/follow-up',
      method: 'post',
      timeout: '50000',
    },
    Get: {
      baseURL: process.env.NEXT_PUBLIC_APPALERTAS_API,
      url: '/alerts/institution/institutionSlug/alert/alertId/follow-ups',
      method: 'post',
      timeout: '50000',
    },
    Show: {
      baseURL: process.env.NEXT_PUBLIC_APPALERTAS_API,
      url: '/alerts/institution/institutionSlug/alert/alertId/follow-up/followUpId',
      method: 'get',
      timeout: '50000',
    },
  }
}

export default Alerts
