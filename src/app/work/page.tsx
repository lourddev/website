"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

interface PortfolioItem {
  name: string;
  year: number;
  avgViewers: string;
  technologies: string[];
  influencers: string[];
  brands: string[];
  image: string;
  links: Array<{
    label: string;
    url: string;
  }>;
  description: string;
}

export default function Work() {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showError, setShowError] = useState(false);
  const correctPassword = "letsworktogether";

  const portfolioItems: PortfolioItem[] = [
    {
      name: "Twitch Extension for Team Vitality",
      year: 2024,
      avgViewers: "85K+",
      technologies: [
        "Twitch Extensions API",
        "React",
        "WebSockets",
        "Node.js",
        "AWS",
      ],
      influencers: ["Gotaga", "Kaydop", "ZywOo"],
      brands: ["Team Vitality", "Red Bull"],
      image: "/bkp/partners/vitality.png",
      links: [
        { label: "Extension Store", url: "#" },
        { label: "Case Study", url: "#" },
      ],
      description:
        "Interactive viewer engagement tools for esports streams, including real-time polls, stats overlays, and viewer predictions. Integrated with team statistics and tournament data.",
    },
    {
      name: "RocketBaguette Tournament Platform",
      year: 2023,
      avgViewers: "45K",
      technologies: [
        "Twitch Chat Interactions",
        "Overlay System",
        "Tournament API",
        "WebSockets",
      ],
      influencers: ["Fairy Peak", "Mout"],
      brands: ["RocketBaguette", "Psyonix"],
      image: "/bkp/partners/rocketbaguette.png",
      links: [
        { label: "Platform", url: "#" },
        { label: "GitHub", url: "#" },
      ],
      description:
        "Custom overlay system for Rocket League tournaments with automated score tracking, player statistics, and interactive audience features including viewer predictions and chat commands.",
    },
    {
      name: "Interactive Stream for JK",
      year: 2023,
      avgViewers: "120K",
      technologies: [
        "Twitch Chat Interactions",
        "Custom Alerts",
        "Donation Integration",
        "Backoffice Dashboard",
      ],
      influencers: ["JK", "Squeezie"],
      brands: ["YouTube Gaming", "Logitech"],
      image: "/bkp/partners/jk.png",
      links: [
        { label: "Stream Highlights", url: "#" },
        { label: "Behind the Scenes", url: "#" },
      ],
      description:
        "Audience participation features for high-profile Twitch streamer including custom alerts, interactive minigames triggered by chat, and advanced moderation tools with analytics dashboard.",
    },
    {
      name: "Custom Chat Bot System",
      year: 2024,
      avgViewers: "30K-75K",
      technologies: [
        "Bot Framework",
        "Chat Analysis",
        "Backoffice",
        "Analytics Dashboard",
        "Moderation Tools",
      ],
      influencers: ["Various Partners"],
      brands: ["Multiple Gaming Brands"],
      image: "/bkp/partners/vitality.png", // Placeholder - should be replaced with actual image
      links: [
        { label: "Documentation", url: "#" },
        { label: "Demo", url: "#" },
      ],
      description:
        "Advanced moderation and engagement tools for growing communities including AI-powered content filtering, custom commands, viewer analytics, and interactive games.",
    },
  ];

  // Check if user has previously authenticated
  useEffect(() => {
    const auth = localStorage.getItem("lourdWorkAuth");
    if (auth === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    setShowError(false);

    // Check if password is correct
    if (e.target.value === correctPassword) {
      setIsAuthenticated(true);
      localStorage.setItem("lourdWorkAuth", "true");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      if (password !== correctPassword) {
        setShowError(true);
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center py-12 px-4 md:px-8">
      {!isAuthenticated ? (
        <div className="flex flex-col items-center justify-center h-screen">
          <Image
            src="/svg/logo.svg"
            alt="Lourd logo"
            width={180}
            height={180}
            className="inline"
          />
          <h1 className="text-6xl font-bold mt-6">work</h1>
          <p className="text-neutral-400 max-w-md mt-4">
            Our portfolio is protected. Please enter the password to view our
            work.
          </p>
          <div className="mt-6 w-full max-w-xs">
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              onKeyDown={handleKeyDown}
              placeholder="password"
              className="w-full bg-transparent border-b border-neutral-700 py-2 px-1 text-center focus:outline-none focus:border-red-600 transition-colors"
              autoFocus
            />
            {showError && (
              <p className="text-red-600 mt-2 text-sm">Incorrect password</p>
            )}
          </div>
        </div>
      ) : (
        <div className="w-full max-w-6xl">
          <h1 className="text-6xl font-bold mb-8">our work</h1>
          
          {/* NDA Disclaimer */}
          <div className="bg-neutral-900 p-5 rounded-lg mb-12 text-left border-l-4 border-red-600">
            <h2 className="font-medium mb-2 text-lg">Confidentiality Notice</h2>
            <p className="text-neutral-400 text-sm">
              The projects showcased here are presented with respect to the timelines and constraints of our clients. 
              All work is covered by non-disclosure agreements, and the information shared has been approved for 
              portfolio purposes. Some details may be omitted to respect client confidentiality.
              <span className="block mt-2">Last updated: May 3, 2025</span>
            </p>
          </div>
          
          {/* Portfolio items */}
          <div className="space-y-24 mb-24">
            {portfolioItems.map((item, index) => (
              <div
                key={index}
                className="border-t border-neutral-800 pt-12 first:border-t-0 first:pt-0"
              >
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  {/* Project image */}
                  <div className="w-full md:w-1/2 relative aspect-video bg-neutral-900 rounded-lg overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      objectFit="cover"
                      className="transition-transform hover:scale-105 duration-500"
                    />
                  </div>

                  {/* Project details */}
                  <div className="w-full md:w-1/2 text-left space-y-4">
                    <h2 className="text-3xl font-bold">{item.name}</h2>
                    <p className="text-neutral-400">{item.description}</p>

                    {/* Details grid */}
                    <div className="grid grid-cols-2 gap-4 mt-6">
                      <div>
                        <h3 className="text-sm text-neutral-500 uppercase tracking-wider mb-1">
                          Year
                        </h3>
                        <p>{item.year}</p>
                      </div>
                      <div>
                        <h3 className="text-sm text-neutral-500 uppercase tracking-wider mb-1">
                          Avg. Viewers
                        </h3>
                        <p>{item.avgViewers}</p>
                      </div>
                      <div className="col-span-2">
                        <h3 className="text-sm text-neutral-500 uppercase tracking-wider mb-1">
                          Technologies
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {item.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="bg-neutral-900 px-3 py-1 text-sm rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-sm text-neutral-500 uppercase tracking-wider mb-1">
                          Influencers
                        </h3>
                        <p>{item.influencers.join(", ")}</p>
                      </div>
                      <div>
                        <h3 className="text-sm text-neutral-500 uppercase tracking-wider mb-1">
                          Brands
                        </h3>
                        <p>{item.brands.join(", ")}</p>
                      </div>
                    </div>

                    {/* Links */}
                    <div className="mt-6">
                      <h3 className="text-sm text-neutral-500 uppercase tracking-wider mb-2">
                        Links
                      </h3>
                      <div className="flex flex-wrap gap-3">
                        {item.links.map((link, linkIndex) => (
                          <Link
                            key={linkIndex}
                            href={link.url}
                            className="border border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-4 py-1 rounded-md transition-colors text-sm"
                          >
                            {link.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact section */}
          <div className="border-t border-neutral-800 pt-12">
            <h2 className="text-3xl font-bold mb-4">
              Let's create something together
            </h2>
            <p className="text-neutral-400 mb-6 max-w-2xl mx-auto">
              Interested in working with us? We're always looking for exciting
              new projects that push the boundaries of interactive experiences
              for streamers and their communities.
            </p>
            <a
              href="mailto:hello@lourd.dev"
              className="inline-block bg-red-600 hover:bg-red-700 text-white py-3 px-8 rounded-md transition-colors"
            >
              Contact us
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
