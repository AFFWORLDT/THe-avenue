"use client";

import React, { useState, useEffect } from 'react';
import { Button } from '@/src/components/ui/button';
import { Input } from '@/src/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/src/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/src/components/ui/select';
import { Textarea } from '@/src/components/ui/textarea';
import { Checkbox } from '@/src/components/ui/checkbox';
import { motion } from 'framer-motion';
import { User, Mail, Phone, MapPin, Home, MessageSquare, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/src/contexts/LanguageContext';

interface LeadCaptureFormProps {
  title?: string;
  subtitle?: string;
  variant?: 'default' | 'compact' | 'modal' | 'cta';
  className?: string;
  onSuccess?: (data?: any) => void;
  showRecaptcha?: boolean;
}

export default function LeadCaptureForm({
  title = "Get Your Free Property Consultation",
  subtitle = "Speak with our expert agents and discover your perfect property today",
  variant = "default",
  className = "",
  onSuccess,
  showRecaptcha = true
}: LeadCaptureFormProps) {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    propertyType: '',
    budget: '',
    timeline: '',
    message: '',
    newsletter: false,
    terms: false
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState('');
  const [isClient, setIsClient] = useState(false);

  // Ensure component only renders reCAPTCHA on client side
  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.terms) {
      alert('Please accept the terms and conditions');
      return;
    }

    if (showRecaptcha && !recaptchaToken) {
      alert('Please complete the reCAPTCHA verification');
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log('Lead captured:', formData);
      setIsSuccess(true);
      
      if (onSuccess) {
        onSuccess(formData);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const onRecaptchaChange = (token: string | null) => {
    setRecaptchaToken(token || '');
  };

  // Function to be called by reCAPTCHA script
  const handleRecaptchaCallback = (token: string) => {
    setRecaptchaToken(token);
  };

  // Make the callback function globally available for reCAPTCHA
  React.useEffect(() => {
    if (showRecaptcha && isClient) {
      (window as any).onRecaptchaCallback = handleRecaptchaCallback;
    }
    return () => {
      if ((window as any).onRecaptchaCallback) {
        delete (window as any).onRecaptchaCallback;
      }
    };
  }, [showRecaptcha, isClient]);

  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center p-8"
      >
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">Thank You!</h3>
        <p className="text-gray-600">
          We've received your request and will contact you within 24 hours.
        </p>
      </motion.div>
    );
  }

  const formContent = (
    <motion.form 
      onSubmit={handleSubmit} 
      className="space-y-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="relative">
          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#dbbb90]" />
          <Input
            type="text"
            placeholder="Full Name *"
            value={formData.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
            className="input-unified pl-10 h-12"
            required
          />
        </div>
        
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#dbbb90]" />
          <Input
            type="email"
            placeholder="Email Address *"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            className="input-unified pl-10 h-12"
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="relative">
          <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#dbbb90]" />
          <Input
            type="tel"
            placeholder="Phone Number *"
            value={formData.phone}
            onChange={(e) => handleInputChange('phone', e.target.value)}
            className="input-unified pl-10 h-12"
            required
          />
        </div>
        
        <div className="relative">
          <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#dbbb90]" />
          <Select value={formData.location} onValueChange={(value) => handleInputChange('location', value)}>
            <SelectTrigger className="select-unified pl-10 h-12">
              <SelectValue placeholder="Preferred Location" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="dubai-marina">Dubai Marina</SelectItem>
              <SelectItem value="downtown-dubai">Downtown Dubai</SelectItem>
              <SelectItem value="palm-jumeirah">Palm Jumeirah</SelectItem>
              <SelectItem value="business-bay">Business Bay</SelectItem>
              <SelectItem value="jlt">Jumeirah Lake Towers</SelectItem>
              <SelectItem value="dubai-hills">Dubai Hills Estate</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="relative">
          <Home className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#dbbb90]" />
          <Select value={formData.propertyType} onValueChange={(value) => handleInputChange('propertyType', value)}>
            <SelectTrigger className="select-unified pl-10 h-12">
              <SelectValue placeholder="Property Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="apartment">Apartment</SelectItem>
              <SelectItem value="villa">Villa</SelectItem>
              <SelectItem value="townhouse">Townhouse</SelectItem>
              <SelectItem value="penthouse">Penthouse</SelectItem>
              <SelectItem value="office">Office</SelectItem>
              <SelectItem value="commercial">Commercial</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <Select value={formData.budget} onValueChange={(value) => handleInputChange('budget', value)}>
          <SelectTrigger className="select-unified h-12">
            <SelectValue placeholder="Budget Range" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="500k-1m">500K - 1M AED</SelectItem>
            <SelectItem value="1m-2m">1M - 2M AED</SelectItem>
            <SelectItem value="2m-5m">2M - 5M AED</SelectItem>
            <SelectItem value="5m-10m">5M - 10M AED</SelectItem>
            <SelectItem value="10m+">10M+ AED</SelectItem>
          </SelectContent>
        </Select>
        
        <Select value={formData.timeline} onValueChange={(value) => handleInputChange('timeline', value)}>
          <SelectTrigger className="select-unified h-12">
            <SelectValue placeholder="Timeline" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="immediate">Immediate</SelectItem>
            <SelectItem value="1-3months">1-3 Months</SelectItem>
            <SelectItem value="3-6months">3-6 Months</SelectItem>
            <SelectItem value="6-12months">6-12 Months</SelectItem>
            <SelectItem value="planning">Just Planning</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="relative">
        <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-[#dbbb90]" />
        <Textarea
          placeholder="Tell us about your requirements..."
          value={formData.message}
          onChange={(e) => handleInputChange('message', e.target.value)}
          className="input-unified pl-10 min-h-[100px] resize-none"
          rows={4}
        />
      </div>

      {showRecaptcha && isClient && (
        <div className="flex justify-center">
          <div className="g-recaptcha" data-sitekey="your-recaptcha-site-key" data-callback="onRecaptchaCallback"></div>
        </div>
      )}

      <div className="space-y-3">
        <div className="flex items-center space-x-2">
          <Checkbox 
            id="newsletter" 
            checked={formData.newsletter}
            onCheckedChange={(checked) => handleInputChange('newsletter', checked as boolean)}
          />
          <label htmlFor="newsletter" className="text-sm text-gray-600">
            Subscribe to our newsletter for property updates
          </label>
        </div>
        
        <div className="flex items-center space-x-2">
          <Checkbox 
            id="terms" 
            checked={formData.terms}
            onCheckedChange={(checked) => handleInputChange('terms', checked as boolean)}
            required
          />
          <label htmlFor="terms" className="text-sm text-gray-600">
            I agree to the <a href="/terms" className="text-[#dbbb90] hover:underline">Terms & Conditions</a> and <a href="/privacy" className="text-[#dbbb90] hover:underline">Privacy Policy</a> *
          </label>
        </div>
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="btn-unified w-full bg-gradient-to-r from-[#dbbb90] to-[#C2A17B] hover:from-[#C2A17B] hover:to-[#B8956A] text-white font-semibold py-4 h-12 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <div className="flex items-center justify-center">
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
            Submitting...
          </div>
        ) : (
          "Get Free Consultation"
        )}
      </Button>
    </motion.form>
  );

  if (variant === "compact") {
    return (
      <Card className={`card-unified bg-white shadow-lg border-0 ${className}`}>
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">{title}</h3>
          {formContent}
        </CardContent>
      </Card>
    );
  }

  if (variant === "modal") {
    return (
      <div className={`bg-white card-unified p-6 max-w-md mx-auto ${className}`}>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 mb-6 text-sm">{subtitle}</p>
        {formContent}
      </div>
    );
  }

  if (variant === "cta") {
    return (
      <div className={`bg-gradient-to-br from-white to-gray-50 card-unified shadow-xl border-0 p-8 ${className}`}>
        <div className="text-center mb-8">
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-3">
            {title}
          </h3>
          <p className="text-gray-600 text-lg">{subtitle}</p>
        </div>
        {formContent}
      </div>
    );
  }

  return (
    <Card className={`card-unified bg-gradient-to-br from-white to-gray-50 shadow-xl border-0 ${className}`}>
      <CardHeader className="text-center pb-4">
        <CardTitle className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2">
          {title}
        </CardTitle>
        <p className="text-gray-600 text-lg">{subtitle}</p>
      </CardHeader>
      <CardContent className="p-6 md:p-8">
        {formContent}
      </CardContent>
    </Card>
  );
}
