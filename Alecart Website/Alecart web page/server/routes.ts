import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertPropertySubmissionSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Submit property information
  app.post("/api/property-submissions", async (req, res) => {
    try {
      const validatedData = insertPropertySubmissionSchema.parse(req.body);
      const submission = await storage.createPropertySubmission(validatedData);
      res.json({ success: true, submission });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Validation error", 
          errors: error.errors 
        });
      } else {
        console.error("Error creating property submission:", error);
        res.status(500).json({ 
          success: false, 
          message: "Internal server error" 
        });
      }
    }
  });

  // Get all property submissions (for admin/debugging)
  app.get("/api/property-submissions", async (req, res) => {
    try {
      const submissions = await storage.getPropertySubmissions();
      res.json({ success: true, submissions });
    } catch (error) {
      console.error("Error fetching property submissions:", error);
      res.status(500).json({ 
        success: false, 
        message: "Internal server error" 
      });
    }
  });

  // Get single property submission
  app.get("/api/property-submissions/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ 
          success: false, 
          message: "Invalid submission ID" 
        });
      }

      const submission = await storage.getPropertySubmission(id);
      if (!submission) {
        return res.status(404).json({ 
          success: false, 
          message: "Submission not found" 
        });
      }

      res.json({ success: true, submission });
    } catch (error) {
      console.error("Error fetching property submission:", error);
      res.status(500).json({ 
        success: false, 
        message: "Internal server error" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
