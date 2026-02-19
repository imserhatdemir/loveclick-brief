export const en = {
  site: {
    title: "LoveClick",
    subtitle: "UI/UX Design Brief",
    tagline: "Partner Visual Creation & Sharing Platform",
  },
  nav: {
    overview: "Overview",
    workflows: "Workflows",
    pages: "Page Details",
    technical: "Technical",
    notes: "Designer Notes",
  },
  lang: {
    toggle: "TR",
    current: "EN",
  },

  // ─── Section 1: Overview ──────────────────────────────────────────────────
  overview: {
    title: "Project Overview",
    subtitle: "Vision & Design Language",
    vision: {
      label: "Vision",
      text: "LoveClick transforms shared couple memories into a visual storytelling experience — powered by AI-enhanced themes and delivered through an Instagram Reels-style feed. The goal is to feel intimate, warm, and alive.",
    },
    pillars: {
      label: "Platform Pillars",
      items: [
        "Partner Visual Creation & Sharing",
        "AI-enhanced memory themes",
        "Instagram Reels / Shorts-style feed",
        "Couples & memory-keepers audience",
      ],
    },
    designLanguage: {
      label: "Design Language",
      tone: "Soft Cloud · Pastel Pink · Modern · Minimalist · Emotional",
      font: {
        label: "Typography",
        value: "Rounded sans-serif — warm, soft, readable",
        sample: "Aa Bb Cc — Romance & Memories",
      },
    },
    palette: {
      label: "Color Palette",
      swatches: [
        { name: "Blush Page", hex: "#FFF5F7", usage: "Page background" },
        { name: "Cloud Pink", hex: "#FCE4EC", usage: "Primary brand / cards" },
        { name: "Soft Rose", hex: "#F8BBD9", usage: "Accents, borders" },
        { name: "Petal", hex: "#F48FB1", usage: "Icons, highlights" },
        { name: "Bloom", hex: "#F06292", usage: "Active states, CTAs" },
        { name: "Ivory White", hex: "#FFFFFF", usage: "Card backgrounds" },
        { name: "Mist Grey", hex: "#F5F5F5", usage: "Secondary surfaces" },
      ],
    },
  },

  // ─── Section 2: Workflows ────────────────────────────────────────────────
  workflows: {
    title: "User Workflows",
    subtitle: "Step-by-step interaction flows",
    sections: [
      {
        id: "story-creation",
        label: "Flow A",
        title: "Story Creation Flow",
        steps: [
          {
            number: 1,
            title: "Image Selection",
            description:
              "User selects multiple images from device gallery. Support for multi-select with a visual selection counter.",
          },
          {
            number: 2,
            title: "Editor Screen",
            description:
              "Each image opens a separate text field. User writes the memory associated with that image.",
          },
          {
            number: 3,
            title: "Save",
            description:
              "Images and texts are matched and saved to the database. Progress is auto-saved.",
          },
          {
            number: 4,
            title: "Publish",
            description:
              'Tapping "Create Story" makes the story available in the feed.',
          },
        ],
      },
      {
        id: "memory-feed",
        label: "Flow B",
        title: 'Memory Feed — "Reels Style"',
        steps: [
          {
            number: 1,
            title: "Entry",
            description:
              'User taps "Watch Story" and fullscreen vertical feed begins with a fade-in transition.',
          },
          {
            number: 2,
            title: "Navigation",
            description:
              "Swipe up to move to next image/text combination. Swipe down to go back.",
          },
          {
            number: 3,
            title: "Right-side Interactions",
            description:
              "Stacked Heart (Like) and Save icons on the right edge — identical to Reels/Shorts layout.",
          },
          {
            number: 4,
            title: "Profile Icons",
            description:
              "Bottom-left corner: two circular profile icons (User + Partner). A floating heart animates above them continuously.",
          },
          {
            number: 5,
            title: "Heart Tap Animation",
            description:
              "Tapping either profile icon triggers a burst of heart animations across the screen.",
          },
        ],
      },
      {
        id: "ai-transform",
        label: "Flow C",
        title: "AI Visual Transformation",
        steps: [
          {
            number: 1,
            title: "Upload",
            description:
              "User uploads a personal photo via gallery or drag & drop.",
          },
          {
            number: 2,
            title: "Theme Selection",
            description:
              "Horizontal scrollable theme picker with thumbnail previews (e.g. Cyberpunk, Oil Paint, Retro, Watercolor).",
          },
          {
            number: 3,
            title: "Generate",
            description:
              '"Design" button triggers AI processing. A custom loading animation plays during generation.',
          },
          {
            number: 4,
            title: "Result",
            description:
              "Transformed image is shown full-screen. User can download or add directly to a story.",
          },
        ],
      },
    ],
  },

  // ─── Section 3: Page Details ─────────────────────────────────────────────
  pages: {
    title: "Page Details",
    subtitle: "Component breakdown per screen",
    cards: [
      {
        tag: "Page 1",
        title: "Home Feed",
        description:
          "The main landing screen. Stories listed at top, quick-action buttons in the middle, tab bar at the bottom.",
        components: [
          {
            label: "Stories Row (Top)",
            detail:
              "Vertical/oval rectangle cards — NOT the classic Instagram circle format. Cards display story cover image and couple names.",
          },
          {
            label: "Quick Actions (Middle)",
            detail:
              'Two prominent buttons: "New Story" and "AI Design Center". Large, tappable, visually distinct.',
          },
          {
            label: "Tab Bar (Bottom)",
            detail:
              "4 tabs: Home, AI Creator, Notifications, Settings. Follows standard iOS/Android tab bar patterns.",
          },
        ],
      },
      {
        tag: "Page 2",
        title: "AI Design Page",
        description:
          "Dedicated screen for AI photo transformation. Clean, minimal, focused on the creation action.",
        components: [
          {
            label: "Upload Zone",
            detail:
              "Large central area — supports both drag & drop and gallery button. Shows preview once image selected.",
          },
          {
            label: "Theme Selector",
            detail:
              "Horizontally scrollable row of theme thumbnails with names below. Selected theme has a pink highlight ring.",
          },
          {
            label: '"Design" Button',
            detail:
              "Full-width, large, prominent CTA button. Disabled state when no image/theme is selected. Shows loading animation when active.",
          },
        ],
      },
      {
        tag: "Page 3",
        title: "Settings",
        description:
          "Organized into three groups: Profile Management, System Options, and Support.",
        components: [
          {
            label: "Profile Management",
            detail:
              "Two tabs: User and Partner. Each tab lets user update Name, Photo, and display info.",
          },
          {
            label: "System Options",
            detail: "App Language selector, Version Info display.",
          },
          {
            label: "Support Section",
            detail: "About Us, Support/Contact, FAQ (expandable accordion).",
          },
        ],
      },
    ],
  },

  // ─── Section 4: Technical Requirements ───────────────────────────────────
  technical: {
    title: "Technical & Visual Requirements",
    subtitle: "Specs the designer must follow",
    animations: {
      label: "Required Animations",
      items: [
        {
          name: "Fade-In Transitions",
          description:
            "All page transitions must use a soft fade-in. No slide or snap transitions.",
          type: "fade",
        },
        {
          name: "Floating Heart",
          description:
            "Profile icons in the feed have a continuously floating heart above them. Uses float-up + opacity cycle animation.",
          type: "float",
        },
        {
          name: "AI Loading Animation",
          description:
            "Custom loading state during AI processing. Should feel organic, not mechanical. Consider a soft pulsing heart or rotating bloom.",
          type: "loading",
        },
      ],
    },
    typography: {
      label: "Typography",
      rules: [
        "Use a rounded sans-serif font (e.g. Nunito, Poppins, or similar)",
        "High readability — minimum 16sp body text on mobile",
        "Headlines: 700–800 weight",
        "Body: 400–500 weight",
        "Avoid all-caps except for micro-labels",
      ],
    },
    spacing: {
      label: "Layout & Spacing",
      rules: [
        "Mobile-first design. Primary canvas: 390 × 844px (iPhone 14 Pro)",
        "Card border radius: 20–24px",
        "Consistent 16px horizontal padding from screen edges",
        "Tab bar height: 82px (including safe area)",
        "Touch targets: minimum 44 × 44px",
      ],
    },
  },

  // ─── Section 5: Designer Notes ────────────────────────────────────────────
  notes: {
    title: "Designer Notes",
    subtitle: "The spirit of LoveClick",
    quote:
      "The app's core emotion should be 'romance and a digital diary'. We want to differentiate with vertical story cards and special profile icon interactions — without breaking the familiar Instagram structure. When users watch a story, they should feel like they're inside a living photo album, not scrolling a video feed.",
    principles: [
      {
        title: "Romance & Digital Diary",
        description:
          "Every screen should feel intimate. Warm colors, soft shadows, gentle transitions. Nothing clinical or cold.",
      },
      {
        title: "Familiar but Differentiated",
        description:
          "Users already know Instagram. Borrow its patterns intentionally — but the vertical oval story cards and floating heart interactions should make LoveClick feel unmistakably its own.",
      },
      {
        title: "Living Photo Album",
        description:
          "The feed is NOT a video player. It's an animated memory book. Design accordingly: slow transitions, readable text overlays, a sense of reflection.",
      },
    ],
  },
};

export type Translations = typeof en;
