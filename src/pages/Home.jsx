import "../styles/Home.css";
import { NavLink } from "react-router-dom";

export function Home() {
  return (
    <div className="home-container">
      <div className="logo-container">
        <span className="text">
          <span className="title">PIERUIGI STATS</span>
          <span className="subtitle">
            Stats of the best leagues around the World.
          </span>
        </span>

        <svg
          className="ball rotate"
          xmlns="http://www.w3.org/2000/svg"
          width="20em"
          height="20em"
          viewBox="0 0 64 64"
        >
          <path
            fill="currentColor"
            d="M61.934 31.992c.021-.713.209-10.904-5.822-17.538c-.268-.593-1.539-2.983-5.641-5.904a41.959 41.959 0 0 0-5.775-3.763l-.008-.004C44.432 4.646 39.43 2 33.359 2c-.461 0-.917.027-1.368.058V2.05c-4.629-.101-9.227 1.09-11.998 2.341c-2.458 1.11-5.187 2.971-5.384 3.115C11.205 9.41 4.75 17.051 4.239 21.1c-2.063 2.637-3.787 14.482.004 21.697c2.658 10.027 12.664 15.045 13.46 15.43c.484.309 5.937 3.68 12.636 3.68c.281 0 1.98.094 2.586.094c7.241 0 17.971-5.104 20.217-9.102c6.171-4.514 9.37-16.147 8.792-20.907M17.758 47.055c-2.869-4.641-4.504-10.705-4.854-12.098c.908-1.361 5.387-7.965 7.939-9.952c1.445.266 7.479 1.374 13.17 2.404c.715 1.853 3.852 10.029 4.75 13.185c-.99 1.174-4.879 5.702-8.708 9.248c-4.065.019-10.979-2.326-12.297-2.787M53.824 14.58c-.012.45-.119 2.05-.885 3.887c-1.521-.777-5.344-2.441-10.584-2.722c-.793-1.171-3.777-5.254-8.49-8.086c.645-1.262 1.543-2.801 2.068-3.27c.17-.048.434-.092.836-.092c2.527 0 6.893 1.655 7.273 1.802c.403.213 8.251 4.439 9.782 8.481M11.773 34.012c-3.423-.584-5.458-1.648-6.066-2.008c-1.273-4.617-.248-9.607-.09-10.322c1.256-2.246 4.832-7.971 7.191-9.058c2.445-.499 5.494.121 6.736.424c-.117 1.615-.342 6.127.326 10.862c-2.706 2.178-6.989 8.447-8.097 10.102M31.685 3.53c.768.057 1.895.225 2.667.454c-.77 1.024-1.559 2.542-1.932 3.292c-1.57.257-7.533 1.397-12.211 4.43c-.943-.25-3.791-.917-6.488-.687c.668-1.293 1.666-2.249 1.773-2.347c.371-.266 7.513-5.263 16.191-5.155zm19.096 38.093c-1.17-.048-5.678-.305-10.621-1.466c-.947-3.302-4.074-11.444-4.789-13.296a556.586 556.586 0 0 1 6.928-9.654c5.688.312 9.682 2.387 10.455 2.82c3.295 5.299 4.018 10.711 4.117 11.615c-1.75 5.446-5.211 9.113-6.09 9.981M3.655 28.519c.084 1.266.287 2.599.654 3.917a11.738 11.738 0 0 0-.682 2.651a33.039 33.039 0 0 1 .028-6.568m9.644 23.359c1.508-1.453 3.367-2.867 4.088-3.401c1.63.574 8.324 2.837 12.591 2.837c.727.975 3.104 4.028 6.018 6.362c-1.814 1.775-4.434 2.613-4.897 2.752c-8.127.218-16.042-4.35-17.8-8.55m21.463 8.538c.922-.537 1.883-1.244 2.678-2.139c1.297-.179 6.863-1.137 11.893-4.832c.332.036.879.08 1.49.063c-3.018 2.957-10.382 6.26-16.061 6.908m15.424-8.376c1.807-4.708 1.73-8.258 1.641-9.392c.992-.972 4.396-4.599 6.285-10.113c1.018.17 1.68.429 1.994.574c.109.4.291 1.324.188 2.725c-.77 5.043-3.428 12.6-8.084 15.941c-.468.239-1.292.291-2.024.265"
          />
        </svg>
      </div>

      <ul className="leagues-list">
        <li>
          <NavLink to="/pierluigi-stats/dashboard">
            <img
              className="league-logo"
              src="https://cdn.socy.cloud/PRAS/v1/_20/p/202311/upload/PRAS/uf_1701090331021LWTqJiILlMdgCr9FvO7tdt7.png"
              alt="Premier league logo"
            />
          </NavLink>
        </li>
        <li>
          <NavLink to="/pierluigi-stats/dashboard">
            <img
              className="league-logo"
              src="https://tiermaker.com/images/template_images/2022/1064743/mejores-ligas-de-futbol-del-mundo-1064743/1683865730128.png"
              alt="Copa de la Liga logo"
            />
          </NavLink>
        </li>
        <li>
          <NavLink to="/pierluigi-stats/dashboard">
            <img
              className="league-logo"
              src="https://cdn.socy.cloud/PRAS/v1/_20/202101/upload/PRAS/uf_1611257817E7bFX6LYFEBq1LRI5NyJ9PmvyU.png"
              alt="La Liga Logo"
            />
          </NavLink>
        </li>
        <li>
          <NavLink to="/pierluigi-stats/dashboard">
            <img
              className="league-logo"
              src="https://tmsi.akamaized.net/games/whatsmyvalue/competition_logos/IT1.png"
              alt="Serie A logo"
            />
          </NavLink>
        </li>
        <li>
          <NavLink to="/pierluigi-stats/dashboard">
            <img
              className="league-logo"
              src="https://tmsi.akamaized.net/games/whatsmyvalue/competition_logos/FR1.png"
              alt="premier league logo"
            />
          </NavLink>
        </li>
        <li>
          <NavLink to="/pierluigi-stats/dashboard">
            <img
              className="league-logo"
              src="https://tmsi.akamaized.net/games/whatsmyvalue/competition_logos/L1.png"
              alt="Bundesliga logo"
            />
          </NavLink>
        </li>
      </ul>

      {/*       <svg
        className="light-effect"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        xmlnsSvgjs="http://svgjs.dev/svgjs"
        viewBox="0 0 800 800"
      >
        <defs>
          <filter
            id="bbblurry-filter"
            x="-100%"
            y="-100%"
            width="400%"
            height="400%"
            filterUnits="objectBoundingBox"
            primitiveUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feGaussianBlur
              stdDeviation="101"
              x="0%"
              y="0%"
              width="100%"
              height="100%"
              in="SourceGraphic"
              edgeMode="none"
              result="blur"
            ></feGaussianBlur>
          </filter>
        </defs>
        <g filter="url(#bbblurry-filter)">
          <ellipse
            rx="151.5"
            ry="150"
            cx="406.3132311436518"
            cy="872.3524396806488"
            fill="hsl(38, 99%, 67%)"
          ></ellipse>
        </g>
      </svg> */}
    </div>
  );
}

export default Home;
