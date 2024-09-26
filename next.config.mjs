/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns:[
            {
              protocol: 'https',        // Protocolo (http o https)
              hostname: 'new.abauntzsoftware.com',  // Dominio
              pathname: '/**',          // (opcional) Patrón de rutas (/** permite todas)
            },
          ],
         unoptimized: true ,
      },
      output: 'export',
};

export default nextConfig;
