import { Arrow } from "@/components/ui/icons";
import { mapLinkUrl, site } from "@/data/site";

/**
 * Hand-drawn situation plan rather than an embedded map: no third-party
 * iframe, no cookie banner, no layout shift, and it keeps the page palette.
 * The dashed yellow line is the walk from the métro; the pin is the school.
 */
export function MapCard() {
  return (
    <div className="map-card">
      <div className="map-canvas">
        <svg
          viewBox="0 0 400 400"
          role="img"
          aria-label={`Plan de situation de l’auto-école, ${site.address.street} à ${site.city}`}
        >
          <rect width="400" height="400" fill="#e8ece7" />

          {/* city blocks */}
          <g fill="#dbe2dc">
            <rect x="18" y="18" width="128" height="104" />
            <rect x="166" y="18" width="96" height="104" />
            <rect x="282" y="18" width="100" height="66" />
            <rect x="18" y="142" width="128" height="86" />
            <rect x="166" y="142" width="96" height="86" />
            <rect x="282" y="104" width="100" height="124" />
            <rect x="18" y="248" width="90" height="134" />
            <rect x="128" y="248" width="134" height="86" />
            <rect x="282" y="248" width="100" height="134" />
            <rect x="128" y="354" width="134" height="28" />
          </g>

          {/* river */}
          <path
            d="M-10 300 C 90 268, 150 344, 250 316 S 380 268, 420 292 L420 330 C 380 306, 320 356, 250 352 S 90 306, -10 338 Z"
            fill="#cbdde2"
          />

          {/* streets */}
          <g
            stroke="#ffffff"
            strokeOpacity=".95"
            strokeWidth="8"
            strokeLinecap="square"
          >
            <path d="M156 0V400" />
            <path d="M272 0V400" />
            <path d="M0 132H400" />
            <path d="M0 238H400" />
            <path d="M118 238V400" />
          </g>
          <g stroke="#ffffff" strokeOpacity=".7" strokeWidth="3">
            <path d="M60 0V400" />
            <path d="M0 60H400" />
            <path d="M0 344H400" />
            <path d="M340 0V400" />
          </g>

          {/* itinerary highlight */}
          <path
            d="M156 400 V238 H272 V186"
            fill="none"
            stroke="#103b15"
            strokeOpacity=".55"
            strokeWidth="3"
            strokeDasharray="12 9"
          />
        </svg>

        <div className="pin" aria-hidden="true">
          <span className="pulse" />
          <span className="head" />
        </div>
      </div>

      <div className="map-foot">
        <div className="n">{site.name}</div>
        <div className="a">
          {site.address.street}, {site.address.city}
          <br />
          {site.address.access}
        </div>
        <a
          className="link-ghost"
          href={mapLinkUrl}
          target="_blank"
          rel="noopener"
        >
          Voir l’itinéraire <Arrow />
        </a>
      </div>
    </div>
  );
}
