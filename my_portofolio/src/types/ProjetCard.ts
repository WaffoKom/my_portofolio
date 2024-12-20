export interface ProjetCardProps {
  name?: string;
  description?: string;
  tags?: { name: string; color: string }[];
  image?: string;
  thumbnail?: string;
  demo?: string;
  sourcecode?: string;
}
