import Analytics from 'appcenter-analytics';

export const pageAnalytics = (pageName) => {
  Analytics.trackEvent(pageName);
};

export const actionAnalytics = (name, properties = {}) => {
  Analytics.trackEvent(`Action ${name}`, properties);
};
