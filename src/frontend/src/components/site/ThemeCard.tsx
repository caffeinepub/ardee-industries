import { type ReactNode } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface ThemeCardProps {
  title?: string;
  description?: string;
  children: ReactNode;
  className?: string;
}

export default function ThemeCard({ title, description, children, className }: ThemeCardProps) {
  return (
    <Card className={cn('shadow-industrial', className)}>
      {(title || description) && (
        <CardHeader>
          {title && <CardTitle>{title}</CardTitle>}
          {description && <CardDescription>{description}</CardDescription>}
        </CardHeader>
      )}
      <CardContent>{children}</CardContent>
    </Card>
  );
}
