export function FitViewport({ children }: { children: React.ReactNode }) {
  return <div className="h-full max-h-dvh w-full max-w-full min-w-0 overflow-x-hidden overflow-y-auto">{children}</div>;
}
