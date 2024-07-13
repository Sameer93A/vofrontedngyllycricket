/**
 * v0 by Vercel.
 * @see https://v0.dev/t/yoJWMMPbNnR
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
export default function Component() {
  return (
    <div className="bg-background rounded-lg border p-6 w-full max-w-4xl">
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="bg-muted rounded-full w-8 h-8 flex items-center justify-center">
              <BirdIcon className="w-5 h-5 text-muted-foreground" />
            </div>
            <h2 className="text-2xl font-bold">Cricket Scorecard</h2>
          </div>
          <div className="bg-muted rounded-full w-8 h-8 flex items-center justify-center">
            <ExpandIcon className="w-5 h-5 text-muted-foreground" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-muted rounded-lg p-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold">Team A</h3>
              <div className="text-sm text-muted-foreground">
                200/8 (40 overs)
              </div>
            </div>
            <div className="mt-4 grid gap-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="bg-primary rounded-full w-6 h-6 flex items-center justify-center text-primary-foreground font-medium">
                    1
                  </div>
                  <div>Batsman A</div>
                </div>
                <div className="text-sm text-muted-foreground">
                  75 (60 balls)
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="bg-primary rounded-full w-6 h-6 flex items-center justify-center text-primary-foreground font-medium">
                    2
                  </div>
                  <div>Batsman B</div>
                </div>
                <div className="text-sm text-muted-foreground">
                  45 (30 balls)
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="bg-primary rounded-full w-6 h-6 flex items-center justify-center text-primary-foreground font-medium">
                    3
                  </div>
                  <div>Batsman C</div>
                </div>
                <div className="text-sm text-muted-foreground">
                  30 (20 balls)
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="bg-primary rounded-full w-6 h-6 flex items-center justify-center text-primary-foreground font-medium">
                    4
                  </div>
                  <div>Batsman D</div>
                </div>
                <div className="text-sm text-muted-foreground">
                  20 (15 balls)
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="bg-primary rounded-full w-6 h-6 flex items-center justify-center text-primary-foreground font-medium">
                    5
                  </div>
                  <div>Batsman E</div>
                </div>
                <div className="text-sm text-muted-foreground">
                  15 (10 balls)
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="bg-primary rounded-full w-6 h-6 flex items-center justify-center text-primary-foreground font-medium">
                    6
                  </div>
                  <div>Batsman F</div>
                </div>
                <div className="text-sm text-muted-foreground">
                  10 (8 balls)
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="bg-primary rounded-full w-6 h-6 flex items-center justify-center text-primary-foreground font-medium">
                    7
                  </div>
                  <div>Batsman G</div>
                </div>
                <div className="text-sm text-muted-foreground">5 (5 balls)</div>
              </div>
            </div>
          </div>
          <div className="bg-muted rounded-lg p-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold">Team B</h3>
              <div className="text-sm text-muted-foreground">
                190/9 (40 overs)
              </div>
            </div>
            <div className="mt-4 grid gap-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="bg-primary rounded-full w-6 h-6 flex items-center justify-center text-primary-foreground font-medium">
                    1
                  </div>
                  <div>Batsman X</div>
                </div>
                <div className="text-sm text-muted-foreground">
                  70 (55 balls)
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="bg-primary rounded-full w-6 h-6 flex items-center justify-center text-primary-foreground font-medium">
                    2
                  </div>
                  <div>Batsman Y</div>
                </div>
                <div className="text-sm text-muted-foreground">
                  40 (35 balls)
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="bg-primary rounded-full w-6 h-6 flex items-center justify-center text-primary-foreground font-medium">
                    3
                  </div>
                  <div>Batsman Z</div>
                </div>
                <div className="text-sm text-muted-foreground">
                  35 (25 balls)
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="bg-primary rounded-full w-6 h-6 flex items-center justify-center text-primary-foreground font-medium">
                    4
                  </div>
                  <div>Batsman P</div>
                </div>
                <div className="text-sm text-muted-foreground">
                  25 (20 balls)
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="bg-primary rounded-full w-6 h-6 flex items-center justify-center text-primary-foreground font-medium">
                    5
                  </div>
                  <div>Batsman Q</div>
                </div>
                <div className="text-sm text-muted-foreground">
                  10 (12 balls)
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="bg-primary rounded-full w-6 h-6 flex items-center justify-center text-primary-foreground font-medium">
                    6
                  </div>
                  <div>Batsman R</div>
                </div>
                <div className="text-sm text-muted-foreground">5 (7 balls)</div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="bg-primary rounded-full w-6 h-6 flex items-center justify-center text-primary-foreground font-medium">
                    7
                  </div>
                  <div>Batsman S</div>
                </div>
                <div className="text-sm text-muted-foreground">5 (6 balls)</div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-muted rounded-lg p-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold">Bowling</h3>
              <div className="text-sm text-muted-foreground">Team A</div>
            </div>
            <div className="mt-4 grid gap-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="bg-primary rounded-full w-6 h-6 flex items-center justify-center text-primary-foreground font-medium">
                    1
                  </div>
                  <div>Bowler A</div>
                </div>
                <div className="text-sm text-muted-foreground">4-0-35-2</div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="bg-primary rounded-full w-6 h-6 flex items-center justify-center text-primary-foreground font-medium">
                    2
                  </div>
                  <div>Bowler B</div>
                </div>
                <div className="text-sm text-muted-foreground">4-0-30-1</div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="bg-primary rounded-full w-6 h-6 flex items-center justify-center text-primary-foreground font-medium">
                    3
                  </div>
                  <div>Bowler C</div>
                </div>
                <div className="text-sm text-muted-foreground">4-0-40-3</div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="bg-primary rounded-full w-6 h-6 flex items-center justify-center text-primary-foreground font-medium">
                    4
                  </div>
                  <div>Bowler D</div>
                </div>
                <div className="text-sm text-muted-foreground">4-0-35-1</div>
              </div>
            </div>
          </div>
          <div className="bg-muted rounded-lg p-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold">Bowling</h3>
              <div className="text-sm text-muted-foreground">Team B</div>
            </div>
            <div className="mt-4 grid gap-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="bg-primary rounded-full w-6 h-6 flex items-center justify-center text-primary-foreground font-medium">
                    1
                  </div>
                  <div>Bowler X</div>
                </div>
                <div className="text-sm text-muted-foreground">4-0-40-2</div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="bg-primary rounded-full w-6 h-6 flex items-center justify-center text-primary-foreground font-medium">
                    2
                  </div>
                  <div>Bowler Y</div>
                </div>
                <div className="text-sm text-muted-foreground">4-0-35-1</div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="bg-primary rounded-full w-6 h-6 flex items-center justify-center text-primary-foreground font-medium">
                    3
                  </div>
                  <div>Bowler Z</div>
                </div>
                <div className="text-sm text-muted-foreground">4-0-30-3</div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="bg-primary rounded-full w-6 h-6 flex items-center justify-center text-primary-foreground font-medium">
                    4
                  </div>
                  <div>Bowler P</div>
                </div>
                <div className="text-sm text-muted-foreground">4-0-35-2</div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-primary rounded-full w-6 h-6 flex items-center justify-center text-primary-foreground font-medium">
              Man of the Match
            </div>
            <div>Batsman A</div>
          </div>
          <div className="text-sm text-muted-foreground">
            Team A won by 10 runs
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

function ExpandIcon(props) {
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
      <path d="m21 21-6-6m6 6v-4.8m0 4.8h-4.8" />
      <path d="M3 16.2V21m0 0h4.8M3 21l6-6" />
      <path d="M21 7.8V3m0 0h-4.8M21 3l-6 6" />
      <path d="M3 7.8V3m0 0h4.8M3 3l6 6" />
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
