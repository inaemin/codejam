import { Avatar as AvatarPrimitive } from '@base-ui/react/avatar';

import { createAvatarGenerator } from '@/components/primitives/avatar/avatar-generator';
import {
  AvvvatarsProvider,
  type AvvvatarsVariant,
} from '@/components/primitives/avatar/avvvatars-avatar';
import { cn } from '@/lib/utils';

const shapeAvvvatarsProvider = new AvvvatarsProvider({ variant: 'shape' });
const characterAvvvatarsProvider = new AvvvatarsProvider({
  variant: 'character',
});

const { Avatar: ShapeAvvvatarsAvatar } = createAvatarGenerator(
  shapeAvvvatarsProvider,
);

const { Avatar: CharacterAvvvatarsAvatar } = createAvatarGenerator(
  characterAvvvatarsProvider,
);

function getAvvvatarsProvider(variant: AvvvatarsVariant) {
  return variant === 'character'
    ? characterAvvvatarsProvider
    : shapeAvvvatarsProvider;
}

function avvvatarsToSvgString(
  id: string,
  size: number,
  variant: AvvvatarsVariant = 'shape',
) {
  return getAvvvatarsProvider(variant).toSvgString(id, size);
}

type AvvvatarsAvatarProps = Omit<AvatarPrimitive.Root.Props, 'children'> & {
  id: string;
  size?: number;
  variant?: AvvvatarsVariant;
  badge?: React.ReactNode;
  avatarClassName?: string;
  fallbackClassName?: string;
  children?: React.ReactNode;
};

function resolveAvatarSizeBucket(size: number): 'sm' | 'default' | 'lg' {
  if (size <= 24) {
    return 'sm';
  }

  if (size >= 40) {
    return 'lg';
  }

  return 'default';
}

function AvvvatarsAvatar({
  id,
  size = 32,
  variant = 'shape',
  badge,
  className,
  style,
  avatarClassName,
  fallbackClassName,
  children,
  ...props
}: AvvvatarsAvatarProps) {
  const fallbackFontSize = Math.max(10, Math.round(size * 0.35));
  const sizeBucket = resolveAvatarSizeBucket(size);

  const GeneratedAvatar =
    variant === 'character' ? CharacterAvvvatarsAvatar : ShapeAvvvatarsAvatar;

  return (
    <AvatarPrimitive.Root
      data-slot="avatar"
      data-size={sizeBucket}
      className={cn(
        'group/avatar relative flex shrink-0 rounded-full select-none',
        className,
      )}
      style={{
        ...style,
        width: `${size}px`,
        height: `${size}px`,
      }}
      {...props}
    >
      <AvatarPrimitive.Fallback
        data-slot="avatar-fallback"
        className={cn(
          'flex size-full items-center justify-center rounded-full bg-transparent p-0',
          fallbackClassName,
        )}
        style={{ fontSize: `${fallbackFontSize}px` }}
      >
        <GeneratedAvatar
          id={id}
          size={size}
          className={cn('overflow-hidden rounded-full', avatarClassName)}
        />
        <span className="sr-only">{id}</span>
      </AvatarPrimitive.Fallback>

      {badge && (
        <span className="text-s absolute -top-2 -right-1">{badge}</span>
      )}

      {children}
    </AvatarPrimitive.Root>
  );
}

export { AvvvatarsAvatar, avvvatarsToSvgString };
