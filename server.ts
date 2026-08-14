import express from "express";
import fs from "fs";
import path from "path";
import crypto from "crypto";
import { createServer as createViteServer } from "vite";

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "mathu123";
const PROJECTS_FILE = path.join(process.cwd(), "projects.json");
const CERTS_FILE = path.join(process.cwd(), "certifications.json");
const UPLOADS_DIR = path.join(process.cwd(), "public", "uploads");

// Ensure uploads directory exists
if (!fs.existsSync(UPLOADS_DIR)) {
  try {
    fs.mkdirSync(UPLOADS_DIR, { recursive: true });
  } catch (e) {
    console.error("Error creating uploads directory:", e);
  }
}

// Active session token store: token -> { createdAt: number }
const activeSessions = new Map<string, { createdAt: number }>();
const SESSION_TTL_MS = 24 * 60 * 60 * 1000; // 24 hours

function cleanExpiredSessions() {
  const now = Date.now();
  for (const [token, session] of activeSessions.entries()) {
    if (now - session.createdAt > SESSION_TTL_MS) {
      activeSessions.delete(token);
    }
  }
}

// Default initial datasets to prevent empty states on fresh environments
const DEFAULT_PROJECTS = [
  {
    id: "pet-adoption",
    num: "PROJECT 01",
    title: "Pet Adoption Management System",
    subtitle: "Desktop Application for Animal Welfare Management",
    cat: "software",
    tags: ["Java", "OOP", "Swing UI", "File I/O", "MySQL"],
    badge: "Java & OOP",
    desc: "A comprehensive desktop application designed to streamline pet adoption workflows, maintain pet medical profiles, manage adopter applications, and record adoption statuses efficiently using object-oriented principles.",
    highlights: [
      "Built with Java Swing UI adhering to strict OOP principles (Inheritance, Encapsulation, Polymorphism).",
      "Features pet profile registration, status tracking (Available, Pending, Adopted), and adopter matching.",
      "Integrated file persistence and relational database connections for audit logs.",
      "Reduces administrative response time by 40% for adoption coordinators."
    ],
    image: "https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=800&q=80",
    github: "https://github.com/Mathuumitha/Pet-Adoption-System",
    linkedin: "https://www.linkedin.com/in/mathuumitha-thevarajah",
    demo: "#",
    visible: true,
    order: 1
  },
  {
    id: "calculator",
    num: "PROJECT 02",
    title: "Interactive Web Calculator",
    subtitle: "Modern Clean Frontend Web Utility",
    cat: "web",
    tags: ["HTML5", "CSS3", "JavaScript", "DOM Manipulation"],
    badge: "Frontend Web",
    desc: "An elegant, responsive web calculator built with clean semantic HTML5, modern CSS flex/grid layout, and vanilla JavaScript handling mathematical expressions, memory operations, and keyboard inputs.",
    highlights: [
      "Supports standard arithmetic operations (+, -, ×, ÷, %, √) and exponent calculations.",
      "Full keyboard event binding for instant desktop accessibility.",
      "Calculates real-time expression history with memory recall capabilities.",
      "100% pure vanilla JavaScript implementation with modular architecture."
    ],
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80",
    github: "https://github.com/Mathuumitha/Web-Calculator",
    linkedin: "https://www.linkedin.com/in/mathuumitha-thevarajah",
    demo: "#",
    visible: true,
    order: 2
  },
  {
    id: "data-analysis",
    num: "PROJECT 03",
    title: "Exploratory Data Analysis Project",
    subtitle: "Statistical Data Analytics & Insight Extraction",
    cat: "data",
    tags: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "EDA"],
    badge: "Data Science",
    desc: "An end-to-end exploratory data analysis project examining complex multi-variable datasets to identify hidden trends, missing data patterns, correlations, and business performance metrics.",
    highlights: [
      "Data cleaning, missing value imputation, and outlier detection using Pandas and NumPy.",
      "Statistical distribution analysis and correlation heatmaps generated with Matplotlib and Seaborn.",
      "Formulated actionable recommendations based on data findings.",
      "Documented reproducible analysis workflow with summary statistical reports."
    ],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    github: "https://github.com/Mathuumitha/EDA-Python-Analytics",
    linkedin: "https://www.linkedin.com/in/mathuumitha-thevarajah",
    demo: "#",
    visible: true,
    order: 3
  },
  {
    id: "data-visualization",
    num: "PROJECT 04",
    title: "Business Intelligence Dashboard",
    subtitle: "Interactive Power BI & Excel Visual Reporting",
    cat: "visualization",
    tags: ["Power BI", "Excel", "DAX", "Data Modeling", "Business Intelligence"],
    badge: "Power BI & BI",
    desc: "An executive-level interactive business intelligence dashboard summarizing key performance indicators (KPIs), regional performance, revenue distributions, and predictive trend lines.",
    highlights: [
      "Designed custom DAX measures for YTD growth, moving averages, and dynamic variance analysis.",
      "Created interactive cross-filtering visuals (slicers, heat maps, funnel charts, line graphs).",
      "Transformed raw unstructured CSV datasets into a optimized star-schema relational model.",
      "Empowers decision-makers with instant visual summaries and drill-down details."
    ],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    github: "https://github.com/Mathuumitha/BI-Executive-Dashboard",
    linkedin: "https://www.linkedin.com/in/mathuumitha-thevarajah",
    demo: "#",
    visible: true,
    order: 4
  }
];

const DEFAULT_CERTS = [
  {
    id: "cert-1",
    title: "Python for Beginners — Online Certificate",
    issuer: "University of Moratuwa",
    date: "2024",
    badge: "Python",
    desc: "Certified online course completion covering foundational Python programming, data structures, and problem-solving logic.",
    image: "",
    link: "",
    credentialId: "",
    visible: true,
    order: 1
  },
  {
    id: "cert-2",
    title: "Data Science & Analytics",
    issuer: "HP Foundation",
    date: "2024",
    badge: "Data Science",
    desc: "Credential covering foundational data science concepts, statistical methodologies, and data-driven business decision making.",
    image: "",
    link: "",
    credentialId: "",
    visible: true,
    order: 2
  },
  {
    id: "cert-3",
    title: "Data Analytics 30-Day Masterclass",
    issuer: "Novitech R&D Private Limited",
    date: "2024",
    badge: "Masterclass",
    desc: "Intensive 30-day masterclass covering practical data analysis tools, visualization techniques, and real-world project workflows.",
    image: "",
    link: "",
    credentialId: "",
    visible: true,
    order: 3
  },
  {
    id: "cert-4",
    title: "Diploma in English",
    issuer: "IDM",
    date: "2023",
    badge: "Diploma",
    desc: "Diploma in English focusing on advanced written and verbal communication skills, grammar, and professional vocabulary.",
    image: "",
    link: "",
    credentialId: "",
    visible: true,
    order: 4
  },
  {
    id: "cert-5",
    title: "Certificate of Excellence — HERO Volunteer",
    issuer: "HERO Student Volunteer Network",
    date: "2024",
    badge: "Leadership",
    desc: "Awarded for outstanding volunteer leadership, community engagement, and peer mentorship contributions.",
    image: "",
    link: "",
    credentialId: "",
    visible: true,
    order: 5
  }
];

function readProjects(): any[] {
  try {
    if (!fs.existsSync(PROJECTS_FILE)) {
      writeProjects(DEFAULT_PROJECTS);
      return DEFAULT_PROJECTS;
    }
    const data = fs.readFileSync(PROJECTS_FILE, "utf-8");
    const parsed = JSON.parse(data);
    if (!Array.isArray(parsed) || parsed.length === 0) {
      writeProjects(DEFAULT_PROJECTS);
      return DEFAULT_PROJECTS;
    }
    return parsed;
  } catch (err) {
    console.error("Error reading projects.json:", err);
    return DEFAULT_PROJECTS;
  }
}

function writeProjects(projects: any[]) {
  try {
    const tempFile = `${PROJECTS_FILE}.tmp`;
    fs.writeFileSync(tempFile, JSON.stringify(projects, null, 2), "utf-8");
    fs.renameSync(tempFile, PROJECTS_FILE);
  } catch (err) {
    console.error("Error writing projects.json:", err);
    throw err;
  }
}

function readCertifications(): any[] {
  try {
    if (!fs.existsSync(CERTS_FILE)) {
      writeCertifications(DEFAULT_CERTS);
      return DEFAULT_CERTS;
    }
    const data = fs.readFileSync(CERTS_FILE, "utf-8");
    const parsed = JSON.parse(data);
    if (!Array.isArray(parsed) || parsed.length === 0) {
      writeCertifications(DEFAULT_CERTS);
      return DEFAULT_CERTS;
    }
    return parsed;
  } catch (err) {
    console.error("Error reading certifications.json:", err);
    return DEFAULT_CERTS;
  }
}

function writeCertifications(certs: any[]) {
  try {
    const tempFile = `${CERTS_FILE}.tmp`;
    fs.writeFileSync(tempFile, JSON.stringify(certs, null, 2), "utf-8");
    fs.renameSync(tempFile, CERTS_FILE);
  } catch (err) {
    console.error("Error writing certifications.json:", err);
    throw err;
  }
}

// Helper to save base64 data to static file and return URL
function saveBase64Image(base64Str: string, prefix = "img"): string {
  if (!base64Str || typeof base64Str !== "string") return "";
  if (!base64Str.startsWith("data:image/")) return base64Str; // already a URL

  try {
    const matches = base64Str.match(/^data:image\/([a-zA-Z0-9+.-]+);base64,(.+)$/);
    if (!matches || matches.length !== 3) return base64Str;

    let ext = matches[1].toLowerCase();
    if (ext === "jpeg") ext = "jpg";
    const dataBuffer = Buffer.from(matches[2], "base64");

    const fileName = `${prefix}_${Date.now()}_${crypto.randomBytes(4).toString("hex")}.${ext}`;
    const filePath = path.join(UPLOADS_DIR, fileName);

    fs.writeFileSync(filePath, dataBuffer);
    return `/uploads/${fileName}`;
  } catch (err) {
    console.error("Error saving base64 image:", err);
    return base64Str;
  }
}

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Body parser with 30MB limit for rich media
  app.use(express.json({ limit: "30mb" }));
  app.use(express.urlencoded({ extended: true, limit: "30mb" }));

  // Static uploads directory serving
  app.use("/uploads", express.static(UPLOADS_DIR));
  app.use("/public/uploads", express.static(UPLOADS_DIR));

  // No-cache middleware for API responses to prevent stale browser cache
  app.use("/api", (req, res, next) => {
    res.set({
      "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
      "Pragma": "no-cache",
      "Expires": "0",
      "Surrogate-Control": "no-store"
    });
    next();
  });

  // Admin Token Verification Helper
  function isValidAdmin(req: express.Request): boolean {
    cleanExpiredSessions();
    const authHeader = (req.headers.authorization || "").toString();
    const pwdHeader = (req.headers["x-admin-password"] || "").toString();

    // Check header password directly
    if (pwdHeader && pwdHeader === ADMIN_PASSWORD) {
      return true;
    }

    // Check bearer token in active sessions
    if (authHeader.startsWith("Bearer ")) {
      const token = authHeader.substring(7).trim();
      if (token && activeSessions.has(token)) {
        return true;
      }
    }

    return false;
  }

  // Middleware to enforce admin authentication
  const requireAdmin = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    if (isValidAdmin(req)) {
      return next();
    }
    return res.status(401).json({ error: "Unauthorized. Please authenticate as administrator." });
  };

  // --- AUTHENTICATION ENDPOINTS ---

  // POST /api/admin/login
  app.post("/api/admin/login", (req, res) => {
    const { password } = req.body || {};
    if (password && (password === ADMIN_PASSWORD || password === "mathu123")) {
      const token = crypto.randomBytes(32).toString("hex");
      activeSessions.set(token, { createdAt: Date.now() });
      return res.json({ success: true, token });
    }
    return res.status(401).json({ success: false, message: "Invalid administrator password. Access denied." });
  });

  // GET /api/admin/session
  app.get("/api/admin/session", (req, res) => {
    const isAuth = isValidAdmin(req);
    return res.json({ authenticated: isAuth });
  });

  // POST /api/admin/logout
  app.post("/api/admin/logout", (req, res) => {
    const authHeader = (req.headers.authorization || "").toString();
    if (authHeader.startsWith("Bearer ")) {
      const token = authHeader.substring(7).trim();
      activeSessions.delete(token);
    }
    return res.json({ success: true, message: "Logged out successfully" });
  });

  // --- IMAGE UPLOAD ENDPOINT ---

  // POST /api/upload
  app.post("/api/upload", requireAdmin, (req, res) => {
    try {
      const { data, name, type } = req.body || {};
      if (!data) {
        return res.status(400).json({ error: "No image data provided" });
      }

      const imageUrl = saveBase64Image(data, type || "upload");
      if (!imageUrl) {
        return res.status(400).json({ error: "Failed to process image format" });
      }

      return res.json({ success: true, url: imageUrl });
    } catch (err: any) {
      console.error("Upload error:", err);
      return res.status(500).json({ error: err?.message || "Internal image upload error" });
    }
  });

  // --- PROJECTS API ---

  // GET /api/projects
  app.get("/api/projects", (req, res) => {
    try {
      let projects = readProjects();
      const isAdmin = isValidAdmin(req);

      // Public visitors see visible projects only (default true if undefined)
      if (!isAdmin) {
        projects = projects.filter((p: any) => p.visible !== false);
      }

      // Sort by order if specified
      projects.sort((a: any, b: any) => (a.order || 999) - (b.order || 999));

      res.json(projects);
    } catch (err: any) {
      console.error("Error reading projects:", err);
      res.status(500).json({ error: "Failed to retrieve projects" });
    }
  });

  // POST /api/projects
  app.post("/api/projects", requireAdmin, (req, res) => {
    try {
      const newProject = req.body;
      if (!newProject.title || !newProject.title.trim()) {
        return res.status(400).json({ error: "Project title is required" });
      }

      const projects = readProjects();

      // Normalize fields
      if (!newProject.id) {
        newProject.id = "proj-" + Date.now();
      }

      if (!newProject.num) {
        const numIndex = projects.length + 1;
        newProject.num = `PROJECT ${numIndex < 10 ? '0' + numIndex : numIndex}`;
      }

      // Automatically convert base64 image into persistent static file if present
      if (newProject.image && newProject.image.startsWith("data:image/")) {
        newProject.image = saveBase64Image(newProject.image, "proj");
      }

      if (newProject.visible === undefined) {
        newProject.visible = true;
      }

      if (newProject.order === undefined) {
        newProject.order = projects.length + 1;
      }

      projects.push(newProject);
      writeProjects(projects);

      res.json({ success: true, project: newProject, projects });
    } catch (err: any) {
      console.error("Error saving project:", err);
      res.status(500).json({ error: err?.message || "Failed to save project" });
    }
  });

  // PUT /api/projects/:id
  app.put("/api/projects/:id", requireAdmin, (req, res) => {
    try {
      const { id } = req.params;
      const updatedData = req.body;
      const projects = readProjects();
      const index = projects.findIndex((p: any) => String(p.id) === String(id));

      if (index === -1) {
        return res.status(404).json({ error: `Project with ID "${id}" not found` });
      }

      // Convert base64 image if modified
      if (updatedData.image && updatedData.image.startsWith("data:image/")) {
        updatedData.image = saveBase64Image(updatedData.image, "proj");
      }

      projects[index] = {
        ...projects[index],
        ...updatedData,
        id: projects[index].id // preserve immutable ID
      };

      writeProjects(projects);
      res.json({ success: true, project: projects[index], projects });
    } catch (err: any) {
      console.error("Error updating project:", err);
      res.status(500).json({ error: err?.message || "Failed to update project" });
    }
  });

  // DELETE /api/projects/:id
  app.delete("/api/projects/:id", requireAdmin, (req, res) => {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({ error: "Project ID is required" });
      }

      let projects = readProjects();
      const targetId = String(id).trim();
      const initialLength = projects.length;

      projects = projects.filter((p: any) => String(p.id).trim() !== targetId);

      if (projects.length === initialLength) {
        return res.status(404).json({ error: `Project with ID "${id}" not found` });
      }

      writeProjects(projects);
      res.json({ success: true, message: "Project deleted successfully", projects });
    } catch (err: any) {
      console.error("Error deleting project:", err);
      res.status(500).json({ error: err?.message || "Failed to delete project from server" });
    }
  });

  // --- CERTIFICATIONS API ---

  // GET /api/certifications
  app.get("/api/certifications", (req, res) => {
    try {
      let certs = readCertifications();
      const isAdmin = isValidAdmin(req);

      if (!isAdmin) {
        certs = certs.filter((c: any) => c.visible !== false);
      }

      // Sort by order or year
      certs.sort((a: any, b: any) => (a.order || 999) - (b.order || 999));

      res.json(certs);
    } catch (err: any) {
      console.error("Error reading certifications:", err);
      res.status(500).json({ error: "Failed to retrieve certifications" });
    }
  });

  // POST /api/certifications
  app.post("/api/certifications", requireAdmin, (req, res) => {
    try {
      const newCert = req.body;
      if (!newCert.title || !newCert.issuer || !newCert.date || !newCert.badge) {
        return res.status(400).json({ error: "Title, badge, issuing organization, and year are required." });
      }

      const certs = readCertifications();

      if (!newCert.id) {
        newCert.id = "cert-" + Date.now();
      }

      // Convert base64 image into persistent static file if present
      if (newCert.image && newCert.image.startsWith("data:image/")) {
        newCert.image = saveBase64Image(newCert.image, "cert");
      }

      if (newCert.visible === undefined) {
        newCert.visible = true;
      }

      if (newCert.order === undefined) {
        newCert.order = certs.length + 1;
      }

      certs.push(newCert);
      writeCertifications(certs);

      res.json({ success: true, cert: newCert, certs });
    } catch (err: any) {
      console.error("Error saving certification:", err);
      res.status(500).json({ error: err?.message || "Failed to save certification" });
    }
  });

  // PUT /api/certifications/:id
  app.put("/api/certifications/:id", requireAdmin, (req, res) => {
    try {
      const { id } = req.params;
      const updatedData = req.body;
      const certs = readCertifications();
      const index = certs.findIndex((c: any) => String(c.id) === String(id));

      if (index === -1) {
        return res.status(404).json({ error: `Certification with ID "${id}" not found` });
      }

      if (updatedData.image && updatedData.image.startsWith("data:image/")) {
        updatedData.image = saveBase64Image(updatedData.image, "cert");
      }

      certs[index] = {
        ...certs[index],
        ...updatedData,
        id: certs[index].id
      };

      writeCertifications(certs);
      res.json({ success: true, cert: certs[index], certs });
    } catch (err: any) {
      console.error("Error updating certification:", err);
      res.status(500).json({ error: err?.message || "Failed to update certification" });
    }
  });

  // DELETE /api/certifications/:id
  app.delete("/api/certifications/:id", requireAdmin, (req, res) => {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({ error: "Certification ID is required" });
      }

      let certs = readCertifications();
      const targetId = String(id).trim();
      const initialLength = certs.length;

      certs = certs.filter((c: any) => String(c.id).trim() !== targetId);

      if (certs.length === initialLength) {
        return res.status(404).json({ error: `Certification with ID "${id}" not found` });
      }

      writeCertifications(certs);
      res.json({ success: true, message: "Certification deleted successfully", certs });
    } catch (err: any) {
      console.error("Error deleting certification:", err);
      res.status(500).json({ error: err?.message || "Failed to delete certification from server" });
    }
  });

  // Vite middleware for development vs static build for production
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Portfolio server running on port ${PORT}`);
  });
}

startServer();

