/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    domains:['links.papareact.com'],
  },
  env: {
      mapbox_access_key: "pk.eyJ1IjoieGZsaW1hOTMiLCJhIjoiY2xldmtzeHVqMGFjcDNwamRpZWgzc2l3MyJ9.czr1kedNb5Ta_Vn8vzhXFA",
      mapbox_style_url: "mapbox://styles/xflima93/cled8oudj000j01p280bw93ip"
  }
}

module.exports = nextConfig
