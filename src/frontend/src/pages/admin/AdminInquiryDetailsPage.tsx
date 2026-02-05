import { useParams, useNavigate } from '@tanstack/react-router';
import { useGetInquiry } from '../../hooks/useQueries';
import { Loader2, ArrowLeft, AlertCircle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import ThemeCard from '../../components/site/ThemeCard';
import { Badge } from '@/components/ui/badge';

export default function AdminInquiryDetailsPage() {
  const params = useParams({ strict: false }) as { id?: string };
  const navigate = useNavigate();
  const inquiryId = params.id ? BigInt(params.id) : BigInt(0);
  const { data: inquiry, isLoading, error } = useGetInquiry(inquiryId);

  if (isLoading) {
    return (
      <div className="container flex min-h-[60vh] items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
          <p className="text-sm text-muted-foreground">Loading inquiry details...</p>
        </div>
      </div>
    );
  }

  if (error || !inquiry) {
    return (
      <div className="container py-12">
        <Alert className="border-destructive/50 bg-destructive/10">
          <AlertCircle className="h-5 w-5 text-destructive" />
          <AlertTitle>Error Loading Inquiry</AlertTitle>
          <AlertDescription>
            Failed to load inquiry details. The inquiry may not exist or you may not have permission to view it.
          </AlertDescription>
        </Alert>
        <Button onClick={() => navigate({ to: '/admin/inquiries' })} variant="outline" className="mt-4">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Inquiries
        </Button>
      </div>
    );
  }

  return (
    <div className="container py-12">
      <Button
        onClick={() => navigate({ to: '/admin/inquiries' })}
        variant="ghost"
        className="mb-6 gap-2"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Inquiries
      </Button>

      <div className="space-y-6">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-3xl font-bold tracking-tight">{inquiry.subject}</h1>
            <Badge variant="outline">{inquiry.messageType}</Badge>
          </div>
          <p className="text-sm text-muted-foreground">Inquiry ID: {inquiry.id.toString()}</p>
        </div>

        <ThemeCard title="Submitter Information">
          <div className="space-y-2">
            <div>
              <span className="text-sm font-medium">Principal ID:</span>
              <p className="text-sm text-muted-foreground font-mono break-all">
                {inquiry.submitter.toString()}
              </p>
            </div>
          </div>
        </ThemeCard>

        <ThemeCard title="Inquiry Details">
          <div className="prose prose-sm max-w-none">
            <pre className="whitespace-pre-wrap text-sm text-foreground bg-muted/30 p-4 rounded-md">
              {inquiry.body}
            </pre>
          </div>
        </ThemeCard>
      </div>
    </div>
  );
}
