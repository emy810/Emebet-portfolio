export const projects = [
  {
    id: "travelguru",
    featured: true,
    title: "TravelGuru",
    tagline:
      "Travel booking platform: team project I took over and brought back to production on my own",
    video: null,
    description:
      "TravelGuru is a travel booking platform where users can register, log in, manage a traveller profile and explore travel packages. It started as a HackYourFuture team project, where I owned the authentication and user-profile layer. After the program ended, the app stopped working: the Firebase project was gone and the CrudCrud API endpoints serving package data had expired. I took ownership of the codebase, rebuilt the backend integration on a new Firebase project, removed the dependency on the expiring external API, and deployed it independently.",
    sections: [
      {
        heading: "Team project: my contributions",
        items: [
          {
            label: "Authentication",
            text: "Implemented Firebase Authentication with Login and Registration pages.",
          },
          {
            label: "AuthContext",
            text: "Designed a React Context that holds auth state in one place, so any page can read the current user without prop drilling.",
          },
          {
            label: "User profiles",
            text: "Built the Traveller Profile page backed by Firestore user documents.",
          },
          {
            label: "Shared UI",
            text: "Created the reusable Button, Card and Input components used across the team's pages.",
          },
        ],
      },
      {
        heading: "After the program: independent ownership",
        items: [
          {
            label: "Restored the backend",
            text: "Created a new Firebase project and reconnected Authentication and Firestore.",
          },
          {
            label: "Fixed core flows",
            text: "Debugged and repaired registration and login end to end.",
          },
          {
            label: "Architecture decision",
            text: "Replaced expired CrudCrud package endpoints with local package data, removing a fragile third-party dependency so the Explore page works reliably.",
          },
          {
            label: "Shipped it",
            text: "Restored the Explore page and deployed the application independently on Vercel.",
          },
        ],
      },
    ],
    tech: [
      "React",
      "Firebase Auth",
      "Firestore",
      "React Router",
      "Context API",
      "Vite",
      "Vercel",
    ],
    liveUrl: "https://travel-guru-one.vercel.app",
    githubUrl: "https://github.com/emy810/TravelGuru",
  },
  {
    id: "memory-game",
    title: "Full‑Stack Memory Game",
    video:
      "https://res.cloudinary.com/dtztti3h0/video/upload/v1780345245/Microsoft__Edge_-_Memory_game_and_10_more_pages_-_Personal_-_Microsoft__Edge_-_1_June_2026_qpywls.mp4",
    description:
      "A collaborative full‑stack memory game built during the HackYourFuture bootcamp. Players flip cards to match pairs while the game tracks time, difficulty, and progress. The backend serves card data from an SQLite database, allowing new cards to be added without changing the frontend.",
    features: [
      {
        label: "Backend & Database",
        text: "Node.js, Express.js, SQLite API for dynamic card data.",
      },
      {
        label: "Responsive Design",
        text: "Mobile‑friendly layout with adaptive grid and card sizing.",
      },
      {
        label: "Difficulty Levels",
        text: "Three modes that adjust grid size and complexity.",
      },
      {
        label: "Game Mechanics",
        text: "Reveal logic, match detection, timer, reset, and win state.",
      },
    ],
    role: "Implemented matching logic, reveal count, timer, and card‑disappearance functionality. Also contributed to CSS styling and UI behavior.",
    tech: ["JavaScript", "Node.js", "Express", "SQLite", "CSS"],
    liveUrl: "https://ae-memory-game.onrender.com/",
    githubUrl: "https://github.com/emy810/memory-game",
  },
  {
    id: "event-startup",
    title: "Event Startup App",
    video:
      "https://res.cloudinary.com/dtztti3h0/video/upload/v1780695403/Video_Project_neres1.mp4",
    description:
      "A React-based event browsing application where users can explore upcoming events, view detailed information, add items to their cart, remove them, and confirm their order. The app also includes a full order summary page that displays purchased items and totals.",
    features: [
      {
        label: "Event Browsing",
        text: "Users can search, sort, and explore a list of events.",
      },
      {
        label: "Event Details",
        text: "Each event has its own detail page with full information.",
      },
      {
        label: "Cart System",
        text: "Add, remove, and update items in a persistent shopping cart.",
      },
      {
        label: "Order Summary",
        text: "After checkout, users can review their full order details.",
      },
    ],
    role: "Built the full frontend architecture using React Router, component-based design, and state management for cart functionality. Implemented event detail pages, cart logic, and the order summary flow.",
    tech: ["React", "React Router", "CSS Modules", "Vercel"],
    liveUrl: "https://mid-frontend-project-skeleton-zahp.vercel.app/",
    githubUrl: "https://github.com/emy810/mid-frontend-project-skeleton",
  },
  {
    id: "spacegalactica",
    title: "SpaceGalactica",
    video:
      "https://res.cloudinary.com/dtztti3h0/video/upload/v1780697221/space_b95uqf.mp4",
    description:
      "SpaceGalactica is a space‑themed web application that displays NASA’s Astronomy Picture of the Day (APOD), allows users to explore planets, and includes a wishlist feature. Originally built with React + Vite, it was later migrated to Next.js to practice the App Router and server components.",
    features: [
      {
        label: "NASA APOD",
        text: "Fetch and display daily astronomy images with title, date, and explanation.",
      },
      {
        label: "Planet Explorer",
        text: "Browse planets and open detailed dynamic pages.",
      },
      {
        label: "Wishlist",
        text: "Add or remove planets using localStorage persistence.",
      },
      {
        label: "Next.js App Router",
        text: "Clean file‑based routing and server components.",
      },
    ],
    tech: ["Next.js", "React", "NASA APOD API", "CSS Modules", "Vercel"],
    liveUrl: "https://spacegalactica-next.vercel.app/",
    githubUrl: "https://github.com/emy810/spacegalactica-next",
  },
];
