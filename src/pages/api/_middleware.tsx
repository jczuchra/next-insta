import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { refreshTokenUrl } from 'utils/client/apiUrl';
import promiseUtil from 'utils/client/promiseUtil';

export async function middleware(req: NextRequest) {
  let response = NextResponse.next();
  const cookies = req.cookies;
  const publicRoutes = ['login', 'register'];
  const route = req.nextUrl.pathname.split('/');
  if (!cookies.accessToken && !publicRoutes.includes(route[route.length - 1])) {
    if (!cookies.refreshToken) {
      return NextResponse.redirect(`${req.nextUrl.origin}/auth/logout`);
    }
    const refreshData = JSON.parse(cookies.refreshToken);

    const resp = await promiseUtil.post(refreshTokenUrl(), {
      refreshToken: refreshData.refreshToken,
      accessToken: refreshData.accessToken,
    });
    response.cookie(
      'refreshToken',
      JSON.stringify({
        refreshToken: resp?.data.refreshToken,
        accessToken: resp?.data.accessToken,
      }),
      { maxAge: 60 * 60 * 24 * 7, path: '/' }
    );
    response.cookie('accessToken', resp?.data.accessToken, {
      maxAge: 60 * 10,
      path: '/',
    });
  }

  return response;
}
