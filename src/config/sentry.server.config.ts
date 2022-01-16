import express from 'express';
import { Handlers, init, Integrations } from "@sentry/node";
import { Integrations as TracingIntegrations } from "@sentry/tracing";

export const sentery = {
  init: (app: any) => init({
    dsn: process.env.SENTRY_DSN, integrations: [
      new Integrations.Http({ tracing: true }),
      new TracingIntegrations.Express({ app }),
    ]
  }),
  requestHandler: Handlers.requestHandler() as express.RequestHandler,
  errorHandler: Handlers.errorHandler() as express.ErrorRequestHandler,
  tracingHandler: Handlers.tracingHandler(),
}