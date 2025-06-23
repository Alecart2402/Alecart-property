import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { X } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { insertPropertySubmissionSchema, type InsertPropertySubmission } from "@shared/schema";

interface ContactFormModalProps {
  open: boolean;
  onClose: () => void;
}

export default function ContactFormModal({ open, onClose }: ContactFormModalProps) {
  const { toast } = useToast();
  
  const form = useForm<InsertPropertySubmission>({
    resolver: zodResolver(insertPropertySubmissionSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      propertyAddress: "",
      propertyType: "",
      propertyCondition: "",
      timeline: "",
      additionalInfo: "",
    },
  });

  const submitMutation = useMutation({
    mutationFn: async (data: InsertPropertySubmission) => {
      const response = await apiRequest("POST", "/api/property-submissions", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Success!",
        description: "Thank you! We've received your information and will contact you within 24 hours with your cash offer.",
      });
      form.reset();
      onClose();
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to submit your information. Please try again or call us directly.",
        variant: "destructive",
      });
      console.error("Form submission error:", error);
    },
  });

  const formatPhoneNumber = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length >= 6) {
      return `(${numbers.slice(0, 3)}) ${numbers.slice(3, 6)}-${numbers.slice(6, 10)}`;
    } else if (numbers.length >= 3) {
      return `(${numbers.slice(0, 3)}) ${numbers.slice(3)}`;
    }
    return numbers;
  };

  const onSubmit = (data: InsertPropertySubmission) => {
    submitMutation.mutate(data);
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold text-gray-900">
            Get Your Cash Offer
          </DialogTitle>
        </DialogHeader>
        
        <div className="mb-6">
          <p className="text-gray-600">
            Fill out the form below and we'll contact you within 24 hours with a fair, no-obligation cash offer for your property.
          </p>
        </div>

        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* Personal Information */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="firstName">First Name *</Label>
              <Input
                id="firstName"
                {...form.register("firstName")}
                placeholder="Enter your first name"
                className="mt-2"
              />
              {form.formState.errors.firstName && (
                <p className="text-red-500 text-sm mt-1">
                  {form.formState.errors.firstName.message}
                </p>
              )}
            </div>
            <div>
              <Label htmlFor="lastName">Last Name *</Label>
              <Input
                id="lastName"
                {...form.register("lastName")}
                placeholder="Enter your last name"
                className="mt-2"
              />
              {form.formState.errors.lastName && (
                <p className="text-red-500 text-sm mt-1">
                  {form.formState.errors.lastName.message}
                </p>
              )}
            </div>
          </div>

          {/* Contact Information */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="phone">Phone Number *</Label>
              <Input
                id="phone"
                {...form.register("phone")}
                placeholder="(555) 123-4567"
                className="mt-2"
                onChange={(e) => {
                  const formatted = formatPhoneNumber(e.target.value);
                  form.setValue("phone", formatted);
                }}
              />
              {form.formState.errors.phone && (
                <p className="text-red-500 text-sm mt-1">
                  {form.formState.errors.phone.message}
                </p>
              )}
            </div>
            <div>
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                {...form.register("email")}
                placeholder="your.email@example.com"
                className="mt-2"
              />
              {form.formState.errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {form.formState.errors.email.message}
                </p>
              )}
            </div>
          </div>

          {/* Property Address */}
          <div>
            <Label htmlFor="propertyAddress">Property Address *</Label>
            <Input
              id="propertyAddress"
              {...form.register("propertyAddress")}
              placeholder="123 Main St, San Bernardino, CA 92401"
              className="mt-2"
            />
            {form.formState.errors.propertyAddress && (
              <p className="text-red-500 text-sm mt-1">
                {form.formState.errors.propertyAddress.message}
              </p>
            )}
          </div>

          {/* Property Details */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="propertyType">Property Type</Label>
              <Select onValueChange={(value) => form.setValue("propertyType", value)}>
                <SelectTrigger className="mt-2">
                  <SelectValue placeholder="Select property type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="single-family">Single Family Home</SelectItem>
                  <SelectItem value="condo">Condominium</SelectItem>
                  <SelectItem value="townhouse">Townhouse</SelectItem>
                  <SelectItem value="multi-family">Multi-Family</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="propertyCondition">Property Condition</Label>
              <Select onValueChange={(value) => form.setValue("propertyCondition", value)}>
                <SelectTrigger className="mt-2">
                  <SelectValue placeholder="Select condition" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="excellent">Excellent</SelectItem>
                  <SelectItem value="good">Good</SelectItem>
                  <SelectItem value="fair">Fair</SelectItem>
                  <SelectItem value="poor">Poor</SelectItem>
                  <SelectItem value="needs-major-repairs">Needs Major Repairs</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Timeline */}
          <div>
            <Label htmlFor="timeline">When do you need to sell?</Label>
            <Select onValueChange={(value) => form.setValue("timeline", value)}>
              <SelectTrigger className="mt-2">
                <SelectValue placeholder="Select timeline" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="asap">ASAP</SelectItem>
                <SelectItem value="1-month">Within 1 month</SelectItem>
                <SelectItem value="3-months">Within 3 months</SelectItem>
                <SelectItem value="6-months">Within 6 months</SelectItem>
                <SelectItem value="flexible">Flexible</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Additional Information */}
          <div>
            <Label htmlFor="additionalInfo">Additional Information</Label>
            <Textarea
              id="additionalInfo"
              {...form.register("additionalInfo")}
              rows={4}
              placeholder="Tell us more about your situation, any liens, or special circumstances..."
              className="mt-2"
            />
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <Button
              type="submit"
              disabled={submitMutation.isPending}
              className="w-full bg-primary hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg text-lg"
            >
              {submitMutation.isPending ? "Submitting..." : "Get My Cash Offer Now"}
            </Button>
            <p className="text-sm text-gray-500 mt-3 text-center">
              By submitting this form, you agree to receive communication from Alecart regarding your property.
            </p>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
