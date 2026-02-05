import { Link, useNavigate } from '@tanstack/react-router';
import { useListInquiries } from '../../hooks/useQueries';
import { Loader2, Mail, AlertCircle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import ThemeCard from '../../components/site/ThemeCard';
import { Badge } from '@/components/ui/badge';
import type { Inquiry } from '../../backend';

export default function AdminInquiriesPage() {
  const { data: inquiries, isLoading, error } = useListInquiries();
  const navigate = useNavigate();

  if (isLoading) {
    return (
      <div className="container flex min-h-[60vh] items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
          <p className="text-sm text-muted-foreground">Loading inquiries...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container py-12">
        <Alert className="border-destructive/50 bg-destructive/10">
          <AlertCircle className="h-5 w-5 text-destructive" />
          <AlertTitle>Error Loading Inquiries</AlertTitle>
          <AlertDescription>
            Failed to load inquiries. Please try refreshing the page.
          </AlertDescription>
        </Alert>
      </div>
    );
  }

  const sortedInquiries = [...(inquiries || [])].sort((a, b) => Number(b.id) - Number(a.id));

  return (
    <div className="container py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Admin: Inquiries</h1>
        <p className="mt-2 text-muted-foreground">
          View and manage all submitted inquiries ({sortedInquiries.length} total)
        </p>
      </div>

      {sortedInquiries.length === 0 ? (
        <ThemeCard>
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <Mail className="h-12 w-12 text-muted-foreground mb-4" />
            <h3 className="text-lg font-semibold mb-2">No Inquiries Yet</h3>
            <p className="text-sm text-muted-foreground">
              Inquiries submitted through the contact form will appear here.
            </p>
          </div>
        </ThemeCard>
      ) : (
        <div className="space-y-4">
          {sortedInquiries.map((inquiry: Inquiry) => (
            <div
              key={inquiry.id.toString()}
              onClick={() => navigate({ to: '/admin/inquiries/$id', params: { id: inquiry.id.toString() } })}
              className="cursor-pointer"
            >
              <ThemeCard className="hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-semibold truncate">{inquiry.subject}</h3>
                      <Badge variant="outline" className="shrink-0">
                        {inquiry.messageType}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground line-clamp-2 mb-2">
                      {inquiry.body.split('\n')[0]}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span>ID: {inquiry.id.toString()}</span>
                      <span>From: {inquiry.submitter.toString().slice(0, 20)}...</span>
                    </div>
                  </div>
                </div>
              </ThemeCard>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
