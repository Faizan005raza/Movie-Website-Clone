"use client";

import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Github } from "lucide-react";

export default function AuthCard() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <Card className="w-90">
        <CardHeader>
          <CardTitle className="text-center">
            Sign in to continue
          </CardTitle>
        </CardHeader>

        <CardContent className="flex flex-col gap-4">
          <Button
            variant="outline"
            onClick={() => signIn("google")}
          >
            Continue with Google
          </Button>

          <Button
            variant="outline"
            onClick={() => signIn("github")}
          >
            <Github className="mr-2 h-4 w-4" />
            Continue with GitHub
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
