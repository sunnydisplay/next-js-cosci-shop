import type { NextConfig } from "next";

//allow domain ให้แสดงรปได้
const nextConfig: NextConfig = {
images:{
  remotePatterns: [
    { protocol: "https", hostname: "api.codingthailand.com"},
  ]
}
};

export default nextConfig;
