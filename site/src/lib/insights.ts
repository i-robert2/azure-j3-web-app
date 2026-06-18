// Application Insights browser telemetry.
// The connection string is injected at build time via the PUBLIC_APPINSIGHTS_CONNECTION_STRING
// environment variable (set by the GitHub Actions deploy workflow). If it's absent
// (e.g. local dev), telemetry is silently skipped.
import { ApplicationInsights } from "@microsoft/applicationinsights-web";

export function initInsights(): void {
  const connectionString = import.meta.env.PUBLIC_APPINSIGHTS_CONNECTION_STRING;
  if (!connectionString) return;

  const appInsights = new ApplicationInsights({
    config: {
      connectionString,
      enableAutoRouteTracking: true,
      disableFetchTracking: false,
      // Cookieless mode: no first/third-party cookies. More privacy-friendly
      // (no consent banner needed) and avoids the Lighthouse best-practices
      // penalty for third-party cookies.
      disableCookiesUsage: true,
    },
  });
  appInsights.loadAppInsights();
  appInsights.trackPageView();
}
