import { type RouteConfig, index, route } from '@react-router/dev/routes';

export default [
  index('routes/home.tsx'), // this is the homepage route
  route('/test', 'routes/test.tsx'),
] satisfies RouteConfig;
