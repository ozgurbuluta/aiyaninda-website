// app/utils/analytics.js
'use client';

import { initializeApp } from 'firebase/app';
import { getAnalytics, logEvent } from 'firebase/analytics';
import { Analytics } from '@vercel/analytics/react';

// Add JSDoc comments for better documentation
/**
 * Initializes Firebase Analytics
 * @param {Object} app - Firebase app instance
 * @returns {Object|null} Analytics instance or null if on server
 */
export const initAnalytics = (app) => {
  if (typeof window !== 'undefined') {
    return getAnalytics(app);
  }
  return null;
};

/**
 * Logs a custom event to Firebase Analytics
 * @param {string} eventName - Name of the event
 * @param {Object} eventParams - Additional parameters for the event
 */
export const logCustomEvent = (eventName, eventParams = {}) => {
  if (typeof window !== 'undefined') {
    const analytics = getAnalytics();
    logEvent(analytics, eventName, eventParams);
  }
};

// Common event names as constants
export const ANALYTICS_EVENTS = {
  SIGNUP_START: 'signup_start',
  SIGNUP_COMPLETE: 'signup_complete',
  FEATURE_VIEW: 'feature_view',
  CHAT_START: 'chat_start',
  NAVIGATION_CLICK: 'navigation_click',
  BUTTON_CLICK: 'button_click'
};