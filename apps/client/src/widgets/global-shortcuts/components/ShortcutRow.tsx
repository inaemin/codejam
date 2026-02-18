import { Kbd, KbdGroup } from '@codejam/ui';

export function ShortcutRow({
  label,
  keys,
}: {
  label: string;
  keys: string[];
}) {
  return (
    <div className="hover:bg-muted flex items-center justify-between rounded-sm px-2 py-1 text-xs">
      <span className="text-muted-foreground/90">{label}</span>
      <KbdGroup>
        {keys.map((k) => (
          <Kbd key={k}>{k}</Kbd>
        ))}
      </KbdGroup>
    </div>
  );
}
