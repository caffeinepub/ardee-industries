import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useCreateInquiry } from '../../hooks/useQueries';
import { Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';

interface InquiryFormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  inquiryType: 'Buy' | 'Sell' | 'Partnership';
  location: string;
  quantity: string;
  message: string;
  consent: boolean;
}

export default function InquiryForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch,
  } = useForm<InquiryFormData>();

  const [inquiryType, setInquiryType] = useState<string>('');
  const [consent, setConsent] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const createInquiryMutation = useCreateInquiry();

  const onSubmit = async (data: InquiryFormData) => {
    if (!consent) {
      return;
    }

    try {
      setSubmitStatus('idle');
      await createInquiryMutation.mutateAsync(data);
      setSubmitStatus('success');
      reset();
      setConsent(false);
      setInquiryType('');
    } catch (error) {
      console.error('Failed to submit inquiry:', error);
      setSubmitStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {submitStatus === 'success' && (
        <Alert className="border-accent/50 bg-accent/10">
          <CheckCircle className="h-4 w-4 text-accent" />
          <AlertDescription>
            Thank you for your inquiry! We'll get back to you within 24 business hours.
          </AlertDescription>
        </Alert>
      )}

      {submitStatus === 'error' && (
        <Alert className="border-destructive/50 bg-destructive/10">
          <AlertCircle className="h-4 w-4 text-destructive" />
          <AlertDescription>
            Failed to submit inquiry. Please try again or contact us directly.
          </AlertDescription>
        </Alert>
      )}

      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">
            Name <span className="text-destructive">*</span>
          </Label>
          <Input
            id="name"
            {...register('name', { required: 'Name is required' })}
            placeholder="Your full name"
          />
          {errors.name && <p className="text-sm text-destructive">{errors.name.message}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="company">Company</Label>
          <Input id="company" {...register('company')} placeholder="Company name (optional)" />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="email">
            Email <span className="text-destructive">*</span>
          </Label>
          <Input
            id="email"
            type="email"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address',
              },
            })}
            placeholder="your@email.com"
          />
          {errors.email && <p className="text-sm text-destructive">{errors.email.message}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Phone</Label>
          <Input id="phone" {...register('phone')} placeholder="Phone number (optional)" />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="inquiryType">
          Inquiry Type <span className="text-destructive">*</span>
        </Label>
        <Select
          value={inquiryType}
          onValueChange={(value) => {
            setInquiryType(value);
            setValue('inquiryType', value as any);
          }}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select inquiry type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Buy">Buy Aluminum Cans</SelectItem>
            <SelectItem value="Sell">Sell Aluminum Cans</SelectItem>
            <SelectItem value="Partnership">Partnership Opportunity</SelectItem>
          </SelectContent>
        </Select>
        <input type="hidden" {...register('inquiryType', { required: 'Inquiry type is required' })} />
        {errors.inquiryType && <p className="text-sm text-destructive">{errors.inquiryType.message}</p>}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="location">Location</Label>
          <Input id="location" {...register('location')} placeholder="City, State/Province (optional)" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="quantity">Estimated Quantity</Label>
          <Input id="quantity" {...register('quantity')} placeholder="e.g., 10 tons (optional)" />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">
          Message <span className="text-destructive">*</span>
        </Label>
        <Textarea
          id="message"
          {...register('message', { required: 'Message is required' })}
          placeholder="Please provide details about your inquiry, including material specifications, timeline, and any specific requirements..."
          rows={6}
        />
        {errors.message && <p className="text-sm text-destructive">{errors.message.message}</p>}
      </div>

      <div className="flex items-start space-x-2">
        <Checkbox id="consent" checked={consent} onCheckedChange={(checked) => setConsent(checked === true)} />
        <Label htmlFor="consent" className="text-sm leading-relaxed cursor-pointer">
          I consent to ARDEE INDUSTRIES contacting me regarding this inquiry and understand my information 
          will be used in accordance with privacy practices. <span className="text-destructive">*</span>
        </Label>
      </div>
      {!consent && submitStatus === 'idle' && (
        <p className="text-sm text-muted-foreground">Please accept the consent to submit the form.</p>
      )}

      <Button type="submit" disabled={createInquiryMutation.isPending || !consent} className="w-full gap-2">
        {createInquiryMutation.isPending ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Submitting...
          </>
        ) : (
          'Submit Inquiry'
        )}
      </Button>
    </form>
  );
}
