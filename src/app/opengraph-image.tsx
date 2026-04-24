import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "ACE — Ahonzo Consulting Experts";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0f1e2a",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Top — logo badge */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              width: "56px",
              height: "56px",
              background: "#2563EB",
              borderRadius: "8px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontWeight: 800,
              fontSize: "18px",
              letterSpacing: "1px",
            }}
          >
            ACE
          </div>
          <span
            style={{
              color: "rgba(255,255,255,0.5)",
              fontSize: "14px",
              letterSpacing: "3px",
              textTransform: "uppercase",
            }}
          >
            Ahonzo Consulting Experts
          </span>
        </div>

        {/* Center — main headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div
            style={{
              fontSize: "72px",
              fontWeight: 800,
              color: "white",
              lineHeight: 1.05,
              letterSpacing: "-2px",
            }}
          >
            Vos données,
            <br />
            <span style={{ color: "#2563EB" }}>votre avantage.</span>
          </div>
          <p
            style={{
              fontSize: "22px",
              color: "rgba(255,255,255,0.55)",
              margin: 0,
              maxWidth: "640px",
              lineHeight: 1.5,
            }}
          >
            Data Science · IA · Cloud · Cybersécurité · Conseil Stratégique
          </p>
        </div>

        {/* Bottom — location + CTA */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                background: "#2563EB",
              }}
            />
            <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "16px" }}>
              Abidjan, Côte d&apos;Ivoire
            </span>
          </div>
          <div
            style={{
              background: "#2563EB",
              color: "white",
              padding: "14px 32px",
              borderRadius: "999px",
              fontSize: "16px",
              fontWeight: 700,
              letterSpacing: "0.5px",
            }}
          >
            ace-corporate.com
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
