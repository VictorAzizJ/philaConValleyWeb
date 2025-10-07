import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";
import { siteConfig } from "@/lib/config/site";

export const runtime = "edge";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const title = searchParams.get("title") || siteConfig.name;

    return new ImageResponse(
      (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#0f172a",
            backgroundImage:
              "radial-gradient(circle at 25px 25px, #1e293b 2%, transparent 0%), radial-gradient(circle at 75px 75px, #1e293b 2%, transparent 0%)",
            backgroundSize: "100px 100px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "80px",
            }}
          >
            <h1
              style={{
                fontSize: "72px",
                fontWeight: "bold",
                background:
                  "linear-gradient(to bottom right, #3b82f6, #a855f7)",
                backgroundClip: "text",
                color: "transparent",
                lineHeight: 1.2,
                textAlign: "center",
                marginBottom: "24px",
              }}
            >
              {title}
            </h1>
            <p
              style={{
                fontSize: "32px",
                color: "#d46103ff",
                textAlign: "center",
                maxWidth: "900px",
              }}
            >
              {siteConfig.name}
            </p>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e) {
    console.error(e);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
