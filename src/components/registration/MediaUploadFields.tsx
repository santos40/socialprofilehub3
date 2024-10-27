import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { UseFormReturn } from 'react-hook-form';
import { BusinessFormData } from '@/types/business';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Image, X } from 'lucide-react';

interface MediaUploadFieldsProps {
  form: UseFormReturn<BusinessFormData>;
}

export const MediaUploadFields = ({ form }: MediaUploadFieldsProps) => {
  const [photoPreview, setPhotoPreview] = useState<string[]>([]);
  const [logoPreview, setLogoPreview] = useState<string>('');

  const handleLogoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64 = reader.result as string;
        setLogoPreview(base64);
        form.setValue('logo', base64);
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePhotosChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const currentPhotos = form.getValues('photos') || [];
      if (currentPhotos.length + files.length > 4) {
        alert('Maximum 4 photos allowed');
        return;
      }

      Array.from(files).forEach(file => {
        const reader = new FileReader();
        reader.onloadend = () => {
          const base64 = reader.result as string;
          setPhotoPreview(prev => [...prev, base64]);
          form.setValue('photos', [...currentPhotos, base64]);
        };
        reader.readAsDataURL(file);
      });
    }
  };

  const removePhoto = (index: number) => {
    const currentPhotos = form.getValues('photos') || [];
    const newPhotos = currentPhotos.filter((_, i) => i !== index);
    form.setValue('photos', newPhotos);
    setPhotoPreview(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-6">
      <FormField
        control={form.control}
        name="logo"
        render={({ field: { value, ...field } }) => (
          <FormItem>
            <FormLabel>Logo</FormLabel>
            <FormControl>
              <div className="space-y-4">
                <Input
                  type="file"
                  accept="image/*"
                  onChange={handleLogoChange}
                  {...field}
                />
                {logoPreview && (
                  <div className="relative w-32 h-32">
                    <img
                      src={logoPreview}
                      alt="Logo preview"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                )}
              </div>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="photos"
        render={({ field: { value, ...field } }) => (
          <FormItem>
            <FormLabel>Photos (Max 4)</FormLabel>
            <FormControl>
              <div className="space-y-4">
                <Input
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handlePhotosChange}
                  {...field}
                />
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {photoPreview.map((photo, index) => (
                    <div key={index} className="relative">
                      <img
                        src={photo}
                        alt={`Photo ${index + 1}`}
                        className="w-full h-32 object-cover rounded-lg"
                      />
                      <Button
                        type="button"
                        variant="destructive"
                        size="icon"
                        className="absolute top-2 right-2"
                        onClick={() => removePhoto(index)}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};