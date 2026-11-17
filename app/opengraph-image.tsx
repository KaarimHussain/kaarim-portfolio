import { ImageResponse } from "next/og";
import { profile } from "./data";

export const alt = "Kaarim Hussain, founder of Klyron Studio and full-stack developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const line = "#232327";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#09090b",
          color: "#f4f4f5",
          fontFamily: "sans-serif",
        }}
      >
        {/* rails like the site */}
        <div style={{ display: "flex", width: 120, borderRight: `1px solid ${line}` }} />
        <div style={{ display: "flex", flexDirection: "column", flex: 1, justifyContent: "center", padding: "0 64px" }}>
          <div style={{ display: "flex", fontSize: 26, color: "#8b8b94", letterSpacing: 1 }}>{profile.handle}</div>
          <div style={{ display: "flex", fontSize: 84, fontWeight: 700, marginTop: 18, letterSpacing: -2 }}>
            {profile.name}
          </div>
          <div style={{ display: "flex", fontSize: 38, color: "#d4d4d8", marginTop: 10 }}>{profile.role}</div>
          <div style={{ display: "flex", alignItems: "center", marginTop: 48, fontSize: 28, color: "#a1a1aa" }}>
            <div style={{ display: "flex", width: 16, height: 16, borderRadius: 8, background: "#22c55e", marginRight: 16 }} />
            Web apps, mobile apps and AI tools · Karachi, Pakistan
          </div>
        </div>
        <div style={{ display: "flex", width: 120, borderLeft: `1px solid ${line}` }} />
      </div>
    ),
    size,
  );
}
