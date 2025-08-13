import { type RouteConfig, index, route } from '@react-router/dev/routes';

export default [
  route('/', 'layouts/main-layout.tsx', [
    index('routes/home.tsx'),
    route('test', 'routes/test.tsx'),
    route('login', 'routes/login.tsx', [
      index('routes/login/index.tsx'),
      route('signup', 'routes/login/signup.tsx'),
      route('signin', 'routes/login/signin.tsx'),
    ]),
  ]),
] satisfies RouteConfig;
