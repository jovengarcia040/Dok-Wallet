export const getLocalCurrency = state => state.settings.localCurrency;
export const isNotificationsReceived = state =>
  state.settings.notifications.received;
export const isNotificationsSent = state => state.settings.notifications.sent;
export const isFingerprint = state => state.settings.fingerprint;
