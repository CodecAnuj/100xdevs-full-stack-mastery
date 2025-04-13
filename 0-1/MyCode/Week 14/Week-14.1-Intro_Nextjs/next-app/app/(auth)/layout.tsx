export default function ({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="p-2 text-center border-b">
        20% off for the next 3 days
      </div>
      {children}
    </div>
  );
}
