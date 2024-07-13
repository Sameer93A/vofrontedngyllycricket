/**
 * v0 by Vercel.
 * @see https://v0.dev/t/LbmKl0h9nNc
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
export default function FirstScoreboard() {
  return (
    <div className="bg-background rounded-lg border p-6 w-full max-w-3xl">
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="bg-muted rounded-full w-8 h-8 flex items-center justify-center">
              <BirdIcon className="w-5 h-5 text-muted-foreground" />
            </div>
            <h2 className="text-lg font-bold">Cricket Scoreboard</h2>
          </div>
          <div className="bg-muted rounded-full w-8 h-8 flex items-center justify-center">
            <RefreshCwIcon className="w-5 h-5 text-muted-foreground" />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div className="flex flex-col items-start">
            <div className="text-sm text-muted-foreground">Team A</div>
            <div className="text-3xl font-bold">245/7</div>
            <div className="text-sm text-muted-foreground">50 Overs</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-4xl font-bold">
              <span className="text-primary">2</span>:
              <span className="text-primary">15</span>
            </div>
            <div className="text-sm text-muted-foreground">20 Overs</div>
          </div>
          <div className="flex flex-col items-end">
            <div className="text-sm text-muted-foreground">Team B</div>
            <div className="text-3xl font-bold">150/4</div>
            <div className="text-sm text-muted-foreground">30 Overs</div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <div className="text-sm text-muted-foreground">
              Current Batting Pair
            </div>
            <div className="bg-muted rounded-full w-8 h-8 flex items-center justify-center">
              <RefreshCwIcon className="w-5 h-5 text-muted-foreground" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col items-start">
              <div className="text-lg font-medium">Virat Kohli</div>
              <div className="text-2xl font-bold">78 (45)</div>
            </div>
            <div className="flex flex-col items-end">
              <div className="text-lg font-medium">Rohit Sharma</div>
              <div className="text-2xl font-bold">45 (32)</div>
            </div>
          </div>
        </div>
      </div>
    </div>
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
