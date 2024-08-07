/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
        return [
            {
                source: '/(.*)',
                headers: [
                    {
                        key: 'X-Frame-Options',
                        value:
                            "SAMEORIGIN",
                    },
                    {
                        key: 'Content-Security-Policy',
                        value:
                            "upgrade-insecure-requests",
                    },
                    {
                        key: 'Permissions-Policy',
                        value:
                            "geolocation=(), camera=(), microphone=()",
                    },
                    {
                        key: 'X-Xss-Protection',
                        value:
                            "1; mode=block",
                    },
                    {
                        key: 'Referrer-Policy',
                        value:
                            "strict-origin-when-cross-origin",
                    }
                ],
            },
            {
                source: '/watch/:id*',
                headers: [
                  {
                    key: 'Cache-Control',
                    value: `public, max-age=0, s-maxage=0`,
                  },
                ],
              },
        ];
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.dmca.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'dummyimage.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'www.easycounter.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'ssl.gstatic.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'i.imghippo.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'i.ibb.co',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'upload.wikimedia.org',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'www.gstatic.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'dxymaqdjfrtyqwnjgzre.supabase.co',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'img.365live88.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'static.flashscore.com',
                port: '',
                pathname: '/**',
            },
        ],
      }
};

export default nextConfig;
