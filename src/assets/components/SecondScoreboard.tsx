/**
 * v0 by Vercel.
 * @see https://v0.dev/t/T3HrChVfeh8
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Card, CardHeader, CardContent } from "@/components/ui/card";

export default function SecondScoreboard() {
  return (
    <Card className="w-full max-w-2xl">
      <CardHeader className="flex items-center justify-between border-b pb-4">
        <div className="flex items-center gap-4">
          <div className="bg-muted rounded-full w-10 h-10 flex items-center justify-center">
            <BirdIcon className="w-6 h-6 text-muted-foreground" />
          </div>
          <div>
            <h2 className="text-lg font-bold">Cricket Scoreboard</h2>
            <p className="text-sm text-muted-foreground">Live Match Update</p>
          </div>
        </div>
        <div className="bg-muted rounded-full w-10 h-10 flex items-center justify-center">
          <RefreshCwIcon className="w-6 h-6 text-muted-foreground" />
        </div>
      </CardHeader>
      <CardContent className="grid gap-6 py-6">
        <div className="grid grid-cols-3 gap-4">
          <div className="flex flex-col items-start">
            <div className="text-sm text-muted-foreground">Team A</div>
            <div className="text-2xl font-bold">224/5</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-4xl font-bold">
              <span className="text-primary">45.2</span>
            </div>
            <div className="text-sm text-muted-foreground">Overs</div>
          </div>
          <div className="flex flex-col items-end">
            <div className="text-sm text-muted-foreground">Team B</div>
            <div className="text-2xl font-bold">189/8</div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div className="flex flex-col items-start">
            <div className="text-sm text-muted-foreground">Batting</div>
            <div className="flex items-center gap-2">
              <div className="text-lg font-medium">Kohli</div>
              <div className="bg-muted rounded-full w-6 h-6 flex items-center justify-center">
                <div className="w-4 h-4 text-muted-foreground" />
              </div>
            </div>
            <div className="text-sm text-muted-foreground">78 (45)</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-2xl font-bold">
              <span className="text-primary">7.8</span>
            </div>
            <div className="text-sm text-muted-foreground">Run Rate</div>
          </div>
          <div className="flex flex-col items-end">
            <div className="text-sm text-muted-foreground">Bowling</div>
            <div className="flex items-center gap-2">
              <div className="text-lg font-medium">Ashwin</div>
              <div className="bg-muted rounded-full w-6 h-6 flex items-center justify-center">
                <div className="w-4 h-4 text-muted-foreground" />
              </div>
            </div>
            <div className="text-sm text-muted-foreground">8-0-45-2</div>
          </div>
        </div>
      </CardContent>
    </Card>
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

function RefreshCwIcon(props) {
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
      <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
      <path d="M21 3v5h-5" />
      <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
      <path d="M8 16H3v5" />
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
