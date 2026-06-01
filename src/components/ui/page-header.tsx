import { Container } from "@/components/ui/container";

interface PageHeaderProps {
  title: string;
  description?: string;
}

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="page-header border-b border-gray-200 bg-gray-50 py-10">
      <Container>
        <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
        {description ? (
          <p className="mt-2 max-w-2xl text-gray-600">{description}</p>
        ) : null}
      </Container>
    </div>
  );
}
