import "./Avatar.css";

interface AvatarProps {
  initials: string;
  size?: number; // px, padrão 120
}

export default function Avatar({ initials, size = 60 }: AvatarProps) {
  return (
    <div className="avatar" style={{ width: size, height: size, fontSize: size * 0.34 }}>
      {initials}
    </div>
  );
}
