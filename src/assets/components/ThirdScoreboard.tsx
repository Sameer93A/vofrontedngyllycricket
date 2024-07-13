/**
 * v0 by Vercel.
 * @see https://v0.dev/t/XuGbepbFmh5
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export default function Component() {
  return (
    <Card className="w-full max-w-4xl">
      <CardHeader className="flex flex-col gap-4 p-6 border-b">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="bg-muted rounded-full w-10 h-10 flex items-center justify-center">
              <BirdIcon className="w-6 h-6 text-muted-foreground" />
            </div>
            <div>
              <h2 className="text-lg font-bold">India vs Australia</h2>
              <p className="text-sm text-muted-foreground">3rd ODI, Indore</p>
            </div>
          </div>
          <div className="text-2xl font-bold">
            <span className="text-primary">2</span>:
            <span className="text-primary">15</span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Avatar className="w-8 h-8">
              <AvatarImage src="/placeholder-user.jpg" />
              <AvatarFallback>IND</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="text-base font-medium">India</h3>
              <p className="text-sm text-muted-foreground">250/5 (50 Overs)</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div>
              <h3 className="text-base font-medium">Australia</h3>
              <p className="text-sm text-muted-foreground">180/8 (45 Overs)</p>
            </div>
            <Avatar className="w-8 h-8">
              <AvatarImage src="/placeholder-user.jpg" />
              <AvatarFallback>AUS</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <div className="grid gap-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="bg-muted rounded-full w-8 h-8 flex items-center justify-center">
                <ClockIcon className="w-5 h-5 text-muted-foreground" />
              </div>
              <p className="text-sm font-medium">Over 45.2</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-muted rounded-full w-8 h-8 flex items-center justify-center">
                <UserIcon className="w-5 h-5 text-muted-foreground" />
              </div>
              <p className="text-sm font-medium">Virat Kohli</p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="bg-muted rounded-full w-8 h-8 flex items-center justify-center">
                <ActivityIcon className="w-5 h-5 text-muted-foreground" />
              </div>
              <p className="text-sm font-medium">Wicket Fallen</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-muted rounded-full w-8 h-8 flex items-center justify-center">
                <TrendingUpIcon className="w-5 h-5 text-muted-foreground" />
              </div>
              <p className="text-sm font-medium">Run Rate: 5.6</p>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col gap-4 p-6 border-t">
        <div className="flex items-center justify-between">
          <p className="text-sm text-muted-foreground">Match Timeline</p>
          <Button variant="ghost" size="sm">
            View Full Scorecard
          </Button>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div className="flex items-center gap-2">
            <div className="bg-muted rounded-full w-8 h-8 flex items-center justify-center">
              <ZapIcon className="w-5 h-5 text-muted-foreground" />
            </div>
            <p className="text-sm">Over 10: 4 Runs</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-muted rounded-full w-8 h-8 flex items-center justify-center">
              <ZapIcon className="w-5 h-5 text-muted-foreground" />
            </div>
            <p className="text-sm">Over 15: 6 Runs</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-muted rounded-full w-8 h-8 flex items-center justify-center">
              <ZapIcon className="w-5 h-5 text-muted-foreground" />
            </div>
            <p className="text-sm">Over 20: 2 Wickets</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-muted rounded-full w-8 h-8 flex items-center justify-center">
              <ZapIcon className="w-5 h-5 text-muted-foreground" />
            </div>
            <p className="text-sm">Over 25: 3 Runs</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-muted rounded-full w-8 h-8 flex items-center justify-center">
              <ZapIcon className="w-5 h-5 text-muted-foreground" />
            </div>
            <p className="text-sm">Over 30: 4 Runs</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-muted rounded-full w-8 h-8 flex items-center justify-center">
              <ZapIcon className="w-5 h-5 text-muted-foreground" />
            </div>
            <p className="text-sm">Over 35: 1 Wicket</p>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}

function ActivityIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" />
    </svg>
  );
}

function BirdIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 7h.01" />
      <path d="M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20" />
      <path d="m20 7 2 .5-2 .5" />
      <path d="M10 18v3" />
      <path d="M14 17.75V21" />
      <path d="M7 18a6 6 0 0 0 3.84-10.61" />
    </svg>
  );
}

function ClockIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function TrendingUpIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
      <polyline points="16 7 22 7 22 13" />
    </svg>
  );
}

function UserIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}

function ZapIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
    </svg>
  );
}
